// src/api/healthApi.js

const diseaseData = {
  "fever, cough, fatigue": {
    disease: "Common Cold",
    advice: "Rest, stay hydrated, take over-the-counter cold medications, and avoid close contact with others to prevent spreading the virus."
  },
  "fever, headache, joint pain, rash": {
    disease: "Dengue Fever",
    advice: "Stay hydrated, take acetaminophen for pain and fever, avoid mosquito bites, and seek medical attention if symptoms worsen."
  },
  "persistent cough, shortness of breath, chest pain": {
    disease: "COVID-19",
    advice: "Self-isolate, monitor symptoms, seek testing, and consult a healthcare provider for further guidance."
  },
  "abdominal pain, nausea, jaundice": {
    disease: "Hepatitis A",
    advice: "Rest, avoid alcohol, eat a healthy diet, and practice good hygiene. Vaccination can prevent future infections."
  },
  "itchy eyes, sneezing, runny nose": {
    disease: "Allergic Rhinitis",
    advice: "Avoid allergens, use antihistamines, and keep windows closed during high pollen seasons."
  },
  "high fever, severe headache, muscle pain": {
    disease: "Malaria",
    advice: "Seek immediate medical attention, take prescribed antimalarial medications, and use mosquito protection measures."
  },
  "sore throat, difficulty swallowing, swollen lymph nodes": {
    disease: "Strep Throat",
    advice: "Take prescribed antibiotics, rest, gargle with salt water, and drink warm liquids to soothe the throat."
  },
  "joint pain, stiffness, swelling": {
    disease: "Rheumatoid Arthritis",
    advice: "Follow prescribed medications, engage in low-impact exercises, apply hot/cold therapy, and maintain a healthy diet."
  },
  "chest pain, shortness of breath, irregular heartbeat": {
    disease: "Heart Disease",
    advice: "Seek immediate medical attention, take prescribed medications, maintain a heart-healthy diet, and exercise regularly as advised by your doctor."
  },
  "frequent urination, excessive thirst, fatigue": {
    disease: "Diabetes",
    advice: "Monitor blood sugar levels, follow a balanced diet, exercise regularly, and take prescribed medications or insulin as directed."
  },
  "memory loss, confusion, difficulty with daily tasks": {
    disease: "Alzheimer's Disease",
    advice: "Seek medical evaluation, engage in cognitive stimulation activities, maintain a routine, and ensure a safe living environment."
  },
  "tremors, stiffness, slow movement": {
    disease: "Parkinson's Disease",
    advice: "Follow prescribed medications, engage in physical therapy, exercise regularly, and consider occupational therapy for daily activities."
  },
  "wheezing, shortness of breath, chest tightness": {
    disease: "Asthma",
    advice: "Use prescribed inhalers, avoid triggers, create an asthma action plan, and seek medical attention for severe symptoms."
  },
  "abdominal pain, diarrhea, blood in stool": {
    disease: "Inflammatory Bowel Disease",
    advice: "Follow prescribed medications, maintain a balanced diet, manage stress, and avoid trigger foods."
  },
  "skin rashes, joint pain, fatigue": {
    disease: "Lupus",
    advice: "Take prescribed medications, protect skin from sun exposure, manage stress, and maintain a healthy lifestyle."
  },
  "excessive sweating, weight loss, rapid heartbeat": {
    disease: "Hyperthyroidism",
    advice: "Take prescribed medications, follow a balanced diet, manage stress, and attend regular check-ups."
  },
  "weight gain, fatigue, cold sensitivity": {
    disease: "Hypothyroidism",
    advice: "Take prescribed thyroid hormone replacement, maintain a healthy diet, exercise regularly, and monitor symptoms."
  },
  "bone pain, frequent fractures, loss of height": {
    disease: "Osteoporosis",
    advice: "Take calcium and vitamin D supplements, engage in weight-bearing exercises, avoid smoking and excessive alcohol consumption."
  },
  "red, scaly patches on skin": {
    disease: "Psoriasis",
    advice: "Use prescribed topical treatments, moisturize regularly, avoid triggers, and consider phototherapy as recommended by your doctor."
  },
  "anxiety, panic attacks, irrational fears": {
    disease: "Anxiety Disorder",
    advice: "Seek therapy or counseling, practice relaxation techniques, exercise regularly, and consider prescribed medications if recommended."
  },
  "persistent sadness, loss of interest, sleep changes": {
    disease: "Depression",
    advice: "Seek professional help, engage in therapy, exercise regularly, maintain a support network, and consider prescribed medications if recommended."
  },
  "red, itchy eyes, light sensitivity": {
    disease: "Conjunctivitis",
    advice: "Use prescribed eye drops, avoid touching or rubbing eyes, practice good hygiene, and use warm compresses for comfort."
  },
  "painful urination, frequent urination, lower back pain": {
    disease: "Urinary Tract Infection",
    advice: "Take prescribed antibiotics, drink plenty of water, urinate frequently, and avoid irritants like caffeine and alcohol."
  },
  "swollen, tender joints, morning stiffness": {
    disease: "Osteoarthritis",
    advice: "Exercise regularly, maintain a healthy weight, use hot/cold therapy, and take prescribed pain relievers as needed."
  },
  "chest pain, shortness of breath, leg swelling": {
    disease: "Congestive Heart Failure",
    advice: "Follow prescribed medications, limit salt intake, monitor weight daily, and engage in light exercise as recommended by your doctor."
  },
  "abdominal pain, bloating, changes in bowel habits": {
    disease: "Irritable Bowel Syndrome",
    advice: "Identify and avoid trigger foods, manage stress, exercise regularly, and consider dietary changes like increasing fiber intake."
  },
  "vision changes, eye pain, halos around lights": {
    disease: "Glaucoma",
    advice: "Use prescribed eye drops, attend regular eye check-ups, protect eyes from injury, and maintain a healthy lifestyle."
  },
  "hearing loss, ringing in ears": {
    disease: "Tinnitus",
    advice: "Avoid loud noises, use white noise machines, manage stress, and consider hearing aids if recommended by your doctor."
  },
  "difficulty breathing, bluish skin color": {
    disease: "Chronic Obstructive Pulmonary Disease (COPD)",
    advice: "Quit smoking, use prescribed inhalers, attend pulmonary rehabilitation, and get vaccinated against flu and pneumonia."
  },
  "skin moles changing size or color": {
    disease: "Skin Cancer",
    advice: "Seek immediate medical evaluation, protect skin from sun exposure, perform regular skin self-exams, and use sunscreen daily."
  },
  "unexplained weight loss, fatigue, night sweats": {
    disease: "Lymphoma",
    advice: "Seek immediate medical evaluation, follow prescribed treatment plan, maintain a healthy diet, and get plenty of rest."
  },
  "difficulty swallowing, heartburn, regurgitation": {
    disease: "Gastroesophageal Reflux Disease (GERD)",
    advice: "Avoid trigger foods, eat smaller meals, don't lie down after eating, and take prescribed medications as directed."
  },
  "muscle weakness, numbness, tingling": {
    disease: "Multiple Sclerosis",
    advice: "Follow prescribed medications, engage in physical therapy, manage stress, and maintain a healthy lifestyle."
  },
  "swollen legs, shortness of breath, fatigue": {
    disease: "Chronic Venous Insufficiency",
    advice: "Elevate legs when resting, wear compression stockings, exercise regularly, and maintain a healthy weight."
  },
  "joint pain, skin rashes, fever": {
    disease: "Lyme Disease",
    advice: "Take prescribed antibiotics, rest, use pain relievers for symptoms, and prevent future tick bites."
  },
  "excessive daytime sleepiness, loud snoring": {
    disease: "Sleep Apnea",
    advice: "Use prescribed CPAP machine, maintain a healthy weight, avoid alcohol and sedatives before bedtime, and sleep on your side."
  },
  "painful, swollen joints, fever, fatigue": {
    disease: "Gout",
    advice: "Take prescribed medications, limit high-purine foods, stay hydrated, and maintain a healthy weight."
  },
  "vision loss, eye pain, floaters": {
    disease: "Retinal Detachment",
    advice: "Seek immediate medical attention, avoid strenuous activities, and follow post-treatment instructions carefully."
  },
  "difficulty concentrating, hyperactivity, impulsiveness": {
    disease: "Attention Deficit Hyperactivity Disorder (ADHD)",
    advice: "Follow prescribed medications, establish routines, break tasks into smaller steps, and consider behavioral therapy."
  },
  "memory problems, confusion, personality changes": {
    disease: "Dementia",
    advice: "Seek medical evaluation, maintain a structured routine, engage in cognitive activities, and ensure a safe living environment."
  },
  "painful intercourse, heavy menstrual bleeding": {
    disease: "Endometriosis",
    advice: "Take prescribed medications, consider hormonal treatments, use pain management techniques, and maintain a healthy lifestyle."
  },
  "blood in urine, back pain, frequent urination": {
    disease: "Kidney Stones",
    advice: "Drink plenty of water, take pain relievers as needed, strain urine to catch passed stones, and follow dietary recommendations."
  },
  "yellowing of skin and eyes, abdominal pain": {
    disease: "Gallstones",
    advice: "Follow a low-fat diet, maintain a healthy weight, consider prescribed medications or surgery as recommended by your doctor."
  },
  "difficulty breathing, chest tightness, coughing": {
    disease: "Pneumonia",
    advice: "Take prescribed antibiotics, get plenty of rest, stay hydrated, and use a humidifier to ease breathing."
  },
  "red, swollen gums, bleeding when brushing": {
    disease: "Gingivitis",
    advice: "Improve oral hygiene, brush and floss regularly, use an antiseptic mouthwash, and schedule regular dental check-ups."
  },
  "sudden severe headache, confusion, vision problems": {
    disease: "Stroke",
    advice: "Seek immediate emergency medical attention, follow rehabilitation plan, make lifestyle changes to prevent future strokes."
  },
  "swelling and pain in leg, warmth and redness": {
    disease: "Deep Vein Thrombosis",
    advice: "Seek immediate medical attention, take prescribed blood thinners, elevate affected leg, and wear compression stockings."
  },
  "difficulty sleeping, daytime fatigue, irritability": {
    disease: "Insomnia",
    advice: "Establish a regular sleep schedule, create a relaxing bedtime routine, avoid caffeine and electronics before bed, and consider cognitive behavioral therapy."
  }
};

export function getDiseaseAdvice(symptoms) {
  console.log("getDiseaseAdvice called with symptoms:", symptoms);
  const skey = symptoms.join(", ").toLowerCase();

  const matches = [];

  for (const [symptomKey, data] of Object.entries(diseaseData)) {
    if (skey.split(", ").every(symptom => symptomKey.toLowerCase().includes(symptom))) {
      matches.push({
        disease: data.disease,
        advice: data.advice
      });
    }
  }

  if (matches.length === 0) {
    matches.push({
      disease: "Unknown",
      advice: "Consult a healthcare provider for a more accurate diagnosis and advice."
    });
  }

  return matches;
}


//original code with a single disease

// export function getDiseaseAdvice(symptoms) {
//   console.log("getDiseaseAdvice called with symptoms:", symptoms);
//   const skey = symptoms.join(", ").toLowerCase();

//   for (const [symptomKey, data] of Object.entries(diseaseData)) {
//     if (skey.split(", ").every(symptom => symptomKey.toLowerCase().includes(symptom))) {
//       return {
//         disease: data.disease,
//         advice: data.advice
//       };
//     }
//   }

//   return {
//     disease: "Unknown",
//     advice: "Consult a healthcare provider for a more accurate diagnosis and advice."
//   };
// }

export function getAllDiseases() {
  return Object.values(diseaseData).map(data => data.disease);
}

export function getSymptomsList() {
  return Object.keys(diseaseData);
}
