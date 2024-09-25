import { useEffect, useState } from 'react';
import { getDiseaseAdvice, getAllDiseases } from '../../api/healthApi';
import Fuse from 'fuse.js';
import ProgressBar from '../ProgressBar'; // Import the ProgressBar component

function HealthAnalysis() {
  const [symptoms, setSymptoms] = useState('');
  const [analysis, setAnalysis] = useState('');
  const [diseases, setDiseases] = useState([]);
  const [fuse, setFuse] = useState(null);

  useEffect(() => {
    const fetchDiseasesAndSymptoms = async () => {
      const allDiseases = await getAllDiseases();
      setDiseases(allDiseases);

      const allSymptoms = allDiseases.flatMap(disease => disease.symptoms);

      const fuseInstance = new Fuse(allSymptoms, {
        threshold: 0.3,
        distance: 100,
        minMatchCharLength: 2,
      });
      setFuse(fuseInstance);
    };

    fetchDiseasesAndSymptoms();
  }, []);

  const handleSymptomChange = (event) => {
    setSymptoms(event.target.value);
  };

  const handleSubmit = (event) => {
      event.preventDefault();
      if (symptoms.trim() === '') {
        alert('Please enter symptoms before submitting.');
        return;
      }

    function normalizeSymptoms(input) {
      return input
        .toLowerCase()
        .replace(/[^a-z, ]/g, '')
        .split(',')
        .map(symptom => symptom.trim())
        .sort()
        .join(', ');
    }

    const normalizedSymptoms = normalizeSymptoms(symptoms);
    const symptomArray = normalizedSymptoms.split(',').map(symptom => symptom.trim());

    const matchedSymptoms = symptomArray.map(symptom => {
      const results = fuse.search(symptom);
      return results.length > 0 ? results[0].item : symptom;
    });

    const results = getDiseaseAdvice(matchedSymptoms);
    setAnalysis(results.map((result, index) => (
      <div key={index} className="mb-4">
        <h3 className="text-lg font-semibold">{result.disease}</h3>
        <p>{result.advice}</p>
        <ProgressBar percentage={result.matchPercentage} /> {/* Display the progress bar */}
      </div>
    )));
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Health Analysis</h2>
      <form onSubmit={handleSubmit} className="mb-4">
        <textarea
          value={symptoms}
          onChange={handleSymptomChange}
          placeholder="Enter your symptoms here, separated by commas..."
          rows="1"
          cols="30"
          className="p-2 border border-gray-300 rounded-md w-full"
        />
        <br />
        <button
          type="submit"
          className="mt-2 bg-blue-500 text-white py-2 px-4 rounded-md"
        >
          Analyze Symptoms
        </button>
      </form>
      {analysis && (
        <div className="bg-gray-100 p-4 rounded-md">
          <h3 className="text-lg font-semibold">Analysis Result:</h3>
          <pre className="whitespace-pre-wrap">{analysis}</pre>
        </div>
      )}
      <div className="mt-4">
        <h3 className="text-lg font-semibold">Possible Diseases:</h3>
        <ul className="list-disc list-inside">
          {diseases.map((disease, index) => (
            <li key={index}>{disease}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default HealthAnalysis;
