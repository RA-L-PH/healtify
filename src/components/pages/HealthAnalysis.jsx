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
      <div key={index} className="mb-6">
        <h3 className="text-2xl font-bold mb-2 text-indigo-600">{result.disease}</h3>
        <h4 className="text-lg font-semibold mb-1 text-gray-700">Diagnosis</h4>
        <p className="text-sm mb-1">Tests Ordered: {result.diagnosis.testsOrdered.join(', ')}</p>
        <p className="text-sm mb-2">Confirmed By: {result.diagnosis.confirmedBy}</p>
        <h4 className="text-lg font-semibold mb-1 text-gray-700">Symptoms</h4>
        <ul className="list-disc list-inside mb-2">
          {result.symptoms.map((symptom, i) => (
            <li key={i} className="text-sm">{symptom}</li>
          ))}
        </ul>
        <h4 className="text-lg font-semibold mb-1 text-gray-700">Prescriptions</h4>
        {result.prescriptions.map((prescription, i) => (
          <div key={i} className="mb-2">
            <p className="text-sm font-medium">Name: {prescription.name}</p>
            <p className="text-sm">Dosage: {prescription.dosage}</p>
            <p className="text-sm">Purpose: {prescription.purpose}</p>
          </div>
        ))}
        <h4 className="text-lg font-semibold mb-1 text-gray-700">Treatment Plan</h4>
        <p className="text-sm mb-1">Lifestyle Changes: {result.treatmentPlan.lifestyleChanges.join(', ')}</p>
        <p className="text-sm mb-2">Therapies: {result.treatmentPlan.therapies.join(', ')}</p>
        <h4 className="text-lg font-semibold mb-1 text-gray-700">Advice</h4>
        <p className="text-sm mb-2">{result.advice}</p>
        <h4 className="text-lg font-semibold mb-1 text-gray-700">Follow-up Plan</h4>
        <p className="text-sm mb-2">{result.followUpPlan}</p>
        <h4 className="text-lg font-semibold mb-1 text-gray-700">Preventive Measures</h4>
        <ul className="list-disc list-inside mb-2">
          {result.preventiveMeasures.map((measure, i) => (
            <li key={i} className="text-sm">{measure}</li>
          ))}
        </ul>
        <ProgressBar percentage={result.matchPercentage} />
      </div>
    )));
  };
  return (
    <div className="p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-3xl font-bold mb-6 text-indigo-700">Health Analysis</h2>
      <form onSubmit={handleSubmit} className="mb-6">
        <textarea
          value={symptoms}
          onChange={handleSymptomChange}
          placeholder="Enter your symptoms here, separated by commas..."
          rows="3"
          cols="30"
          className="p-3 border border-gray-300 rounded-lg w-full text-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <br />
        <button
          type="submit"
          className="mt-4 bg-indigo-600 hover:bg-indigo-700 text-white py-3 px-6 rounded-lg text-lg font-semibold transition duration-300 ease-in-out"
        >
          Analyze Symptoms
        </button>
      </form>
      {analysis && (
        <div className="bg-gray-50 p-6 rounded-lg shadow-inner">
          <h3 className="text-2xl font-bold mb-4 text-indigo-600">Analysis Result:</h3>
          <div className="text-lg text-gray-700 whitespace-pre-wrap">{analysis}</div>
        </div>
      )}
      <div className="mt-8">
        <h3 className="text-2xl font-bold mb-4 text-indigo-600">Possible Diseases:</h3>
        <ul className="list-disc list-inside space-y-2">
          {diseases.map((disease, index) => (
            <li key={index} className="text-lg text-gray-700">{disease}</li>
          ))}
        </ul>
      </div>
    </div>      
  );
}

export default HealthAnalysis;
