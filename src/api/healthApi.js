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
  },
  "fever, night sweats, weight loss": {
    disease: "Tuberculosis",
    advice: "Seek medical attention, take prescribed antibiotics, and follow the treatment plan strictly to prevent drug resistance."
  },
  "painful urination, pelvic pain, discharge": {
    disease: "Chlamydia",
    advice: "Take prescribed antibiotics, avoid sexual activity during treatment, and notify sexual partners for testing."
  },
  "unexplained weight gain, fatigue, dry skin": {
    disease: "Hypothyroidism",
    advice: "Take prescribed thyroid hormone replacement, maintain a balanced diet, and get regular blood tests."
  },
  "frequent headaches, nausea, sensitivity to light": {
    disease: "Migraine",
    advice: "Avoid known triggers, take prescribed medications, rest in a dark, quiet room, and stay hydrated."
  },
  "abdominal pain, vomiting, bloating": {
    disease: "Gastroenteritis",
    advice: "Stay hydrated, avoid solid foods until symptoms improve, and rest. Seek medical advice if symptoms persist."
  },
  "fever, cough, rapid breathing": {
    disease: "Bronchitis",
    advice: "Rest, drink plenty of fluids, avoid smoking, and use a humidifier to ease symptoms. Seek medical advice if symptoms worsen."
  },
  "fatigue, dry mouth, joint pain": {
    disease: "Sjogren's Syndrome",
    advice: "Stay hydrated, use artificial tears for dry eyes, and follow prescribed treatments. Regular dental check-ups are recommended."
  },
  "painful sores, swollen lymph nodes, fever": {
    disease: "Herpes Simplex",
    advice: "Take prescribed antiviral medications, avoid touching sores, and maintain good hygiene to prevent spreading."
  },
  "blurred vision, eye pain, halos around lights": {
    disease: "Cataracts",
    advice: "Schedule regular eye check-ups, protect your eyes from UV light, and consider surgery if vision is severely affected."
  },
  "shortness of breath, fatigue, chronic cough": {
    disease: "Pulmonary Fibrosis",
    advice: "Follow prescribed treatments, use supplemental oxygen if recommended, and avoid lung irritants like smoking."
  },
  "joint pain, redness, warmth": {
    disease: "Gout",
    advice: "Limit intake of purine-rich foods, stay hydrated, and take prescribed medications. Regular check-ups are important."
  },
  "abdominal pain, jaundice, pale stools": {
    disease: "Pancreatitis",
    advice: "Avoid alcohol, eat a low-fat diet, and take prescribed medications. Hospitalization may be required for severe cases."
  },
  "persistent diarrhea, blood in stool, weight loss": {
    disease: "Crohn's Disease",
    advice: "Follow prescribed medications, maintain a balanced diet, avoid trigger foods, and manage stress."
  },
  "weakness, dizziness, chest pain": {
    disease: "Anemia",
    advice: "Eat iron-rich foods, take prescribed iron supplements, and follow up with your healthcare provider for regular blood tests."
  },
  "fever, sore throat, swollen glands": {
    disease: "Mononucleosis",
    advice: "Rest, stay hydrated, avoid contact sports, and take over-the-counter pain relievers to reduce symptoms."
  },
  "persistent cough, weight loss, fatigue": {
    disease: "Lung Cancer",
    advice: "Seek immediate medical attention, follow prescribed treatments, avoid smoking, and consider lifestyle changes to improve overall health."
  },
  "severe abdominal pain, nausea, vomiting": {
    disease: "Appendicitis",
    advice: "Seek immediate medical attention. Surgery is often required to remove the appendix and prevent complications."
  },
  "fever, neck stiffness, sensitivity to light": {
    disease: "Meningitis",
    advice: "Seek immediate medical attention, take prescribed antibiotics or antivirals, and avoid close contact with others."
  },
  "severe headache, nausea, double vision": {
    disease: "Brain Tumor",
    advice: "Seek immediate medical evaluation, follow prescribed treatments, and consider lifestyle changes to manage symptoms."
  },
  "skin rash, fatigue, headache": {
    disease: "Chickenpox",
    advice: "Stay home, avoid scratching the rash, take prescribed antiviral medications, and use over-the-counter treatments for itch relief."
  },
  "frequent thirst, frequent urination, blurred vision": {
    disease: "Type 1 Diabetes",
    advice: "Monitor blood sugar levels regularly, take insulin as prescribed, follow a balanced diet, and exercise regularly."
  },
  "fever, rash, joint pain": {
    disease: "Chikungunya",
    advice: "Stay hydrated, take pain relievers as needed, avoid mosquito bites, and seek medical attention if symptoms worsen."
  },
  "painful urination, discharge, pelvic pain": {
    disease: "Gonorrhea",
    advice: "Take prescribed antibiotics, avoid sexual activity during treatment, and notify sexual partners for testing."
  },
  "persistent cough, night sweats, weight loss": {
    disease: "HIV/AIDS",
    advice: "Seek medical evaluation, follow prescribed antiretroviral therapy, and maintain a healthy lifestyle to manage the condition."
  },
  "fever, abdominal pain, blood in stool": {
    disease: "Typhoid Fever",
    advice: "Seek medical attention, take prescribed antibiotics, stay hydrated, and rest. Vaccination can prevent future infections."
  },
  "rash, fever, swollen lymph nodes": {
    disease: "Rubella",
    advice: "Stay home, rest, avoid contact with pregnant women, and take over-the-counter medications for symptom relief."
  },
  "fever, muscle pain, confusion": {
    disease: "Leptospirosis",
    advice: "Seek medical attention, take prescribed antibiotics, avoid contaminated water sources, and rest."
  },
  "fever, headache, body aches": {
    disease: "Zika Virus",
    advice: "Stay hydrated, rest, avoid mosquito bites, and consult a healthcare provider if pregnant or planning to become pregnant."
  },
  "rash, swollen glands, joint pain": {
    disease: "Measles",
    advice: "Stay home, avoid contact with others, rest, and take over-the-counter medications for symptom relief."
  },
  "high fever, muscle pain, kidney failure": {
    disease: "Hantavirus",
    advice: "Seek immediate medical attention, avoid rodent-infested areas, and follow prescribed treatments. Early detection is crucial."
  },
  "muscle weakness, double vision, difficulty swallowing": {
    disease: "Myasthenia Gravis",
    advice: "Follow prescribed treatments, engage in regular check-ups, manage stress, and avoid overexertion."
  },
  "painful sores, fever, swollen lymph nodes": {
    disease: "Syphilis",
    advice: "Take prescribed antibiotics, avoid sexual contact during treatment, and notify sexual partners for testing."
  },
  "fever, chills, abdominal pain, headache": {
    disease: "Yellow Fever",
    advice: "Seek medical attention, rest, stay hydrated, and avoid mosquito bites. Vaccination can prevent future infections."
  },
  "fatigue, weight loss, diarrhea": {
    disease: "Celiac Disease",
    advice: "Follow a strict gluten-free diet, take prescribed supplements, and seek regular medical follow-ups."
  },
  "dizziness, sweating, rapid heartbeat": {
    disease: "Panic Disorder",
    advice: "Seek therapy or counseling, practice relaxation techniques, avoid triggers, and consider prescribed medications if necessary."
  },
  "severe stomach pain, blood in stool, vomiting": {
    disease: "Colon Cancer",
    advice: "Seek immediate medical evaluation, follow prescribed treatments, and consider lifestyle changes to improve overall health."
  },
  "frequent infections, easy bruising, fatigue": {
    disease: "Leukemia",
    advice: "Seek immediate medical attention, follow prescribed treatments, and maintain a healthy lifestyle to support recovery."
  },
  "persistent itching, yellowing of the skin, dark urine": {
    disease: "Liver Disease",
    advice: "Avoid alcohol, follow a liver-friendly diet, take prescribed medications, and seek regular medical evaluations."
  },
  "skin sores, swollen lymph nodes, fever": {
    disease: "Leprosy",
    advice: "Take prescribed antibiotics, avoid close contact with others, and follow up with regular medical evaluations."
  },
  "stomach pain, nausea, vomiting blood": {
    disease: "Peptic Ulcer",
    advice: "Avoid nonsteroidal anti-inflammatory drugs (NSAIDs), take prescribed medications, and avoid spicy or acidic foods."
  },
  "shortness of breath, chest pain, palpitations": {
    disease: "Pulmonary Embolism",
    advice: "Seek immediate medical attention, take prescribed blood thinners, and avoid prolonged immobility."
  },
  "chronic cough, wheezing, shortness of breath": {
    disease: "Bronchiectasis",
    advice: "Follow prescribed treatments, use airway clearance techniques, avoid lung irritants, and seek regular medical evaluations."
  },
  "fever, muscle pain, severe headache": {
    disease: "Lassa Fever",
    advice: "Seek immediate medical attention, avoid contact with rodents, and follow prescribed treatments. Early detection is crucial."
  },
  "joint pain, eye inflammation, urinary problems": {
    disease: "Reactive Arthritis",
    advice: "Take prescribed anti-inflammatory medications, engage in physical therapy, and seek regular medical evaluations."
  },
  "painful urination, blood in urine, fever": {
    disease: "Urinary Tract Infection (UTI)",
    advice: "Stay hydrated, take prescribed antibiotics, and maintain good hygiene to prevent future infections."
  },
  "persistent fever, muscle pain, bleeding gums": {
    disease: "Dengue Fever",
    advice: "Seek immediate medical attention, stay hydrated, avoid mosquito bites, and take over-the-counter pain relievers as needed."
  },
  "sudden vision loss, eye pain, headache": {
    disease: "Glaucoma",
    advice: "Seek immediate medical evaluation, follow prescribed treatments, and schedule regular eye check-ups."
  },
  "frequent urination, increased thirst, blurred vision": {
    disease: "Type 2 Diabetes",
    advice: "Monitor blood sugar levels regularly, follow a balanced diet, engage in regular exercise, and take prescribed medications."
  },
  "fever, chills, swollen glands, sore throat": {
    disease: "Tonsillitis",
    advice: "Rest, stay hydrated, avoid irritants, and take prescribed antibiotics if bacterial. Surgery may be considered in chronic cases."
  },
  "chest pain, shortness of breath, sweating": {
    disease: "Heart Attack",
    advice: "Seek immediate medical attention, take prescribed medications, and avoid exertion. Aspirin may be recommended as first aid."
  },
  "fatigue, weakness, pale skin": {
    disease: "Iron-Deficiency Anemia",
    advice: "Increase iron intake through diet or supplements, take prescribed iron supplements, and avoid excessive caffeine."
  },
  "joint pain, skin rash, fatigue": {
    disease: "Systemic Lupus Erythematosus (SLE)",
    advice: "Follow prescribed treatments, avoid sun exposure, and engage in regular check-ups to monitor the condition."
  },
  "unexplained weight loss, night sweats, swollen lymph nodes": {
    disease: "Lymphoma",
    advice: "Seek medical evaluation, follow prescribed treatments, and consider lifestyle changes to support overall health."
  },
  "persistent cough, coughing up blood, chest pain": {
    disease: "Tuberculosis (TB)",
    advice: "Take prescribed antibiotics for the full duration, avoid close contact with others, and maintain good hygiene."
  },
  "abdominal pain, diarrhea, blood in stool": {
    disease: "Ulcerative Colitis",
    advice: "Follow prescribed medications, avoid trigger foods, and manage stress. Regular medical follow-ups are important."
  },
  "severe headache, neck pain, sensitivity to light": {
    disease: "Encephalitis",
    advice: "Seek immediate medical attention, follow prescribed antiviral or antibacterial treatments, and rest."
  },
  "fatigue, joint pain, skin thickening": {
    disease: "Scleroderma",
    advice: "Follow prescribed treatments, protect your skin from injury, and engage in physical therapy to maintain mobility."
  },
  "frequent hunger, excessive thirst, frequent urination": {
    disease: "Prediabetes",
    advice: "Adopt a healthy diet, increase physical activity, monitor blood sugar levels, and consult with a healthcare provider."
  },
  "sudden severe headache, nausea, confusion": {
    disease: "Subarachnoid Hemorrhage",
    advice: "Seek immediate medical attention, avoid physical exertion, and follow prescribed treatments to manage the condition."
  },
  "persistent fever, weight loss, night sweats": {
    disease: "Hodgkin's Lymphoma",
    advice: "Seek medical evaluation, follow prescribed treatments, and maintain a healthy lifestyle to support recovery."
  },
  "weakness, numbness, vision loss": {
    disease: "Multiple Sclerosis (MS)",
    advice: "Follow prescribed treatments, engage in physical therapy, manage stress, and maintain a balanced diet."
  },
  "persistent ear pain, discharge, hearing loss": {
    disease: "Chronic Otitis Media",
    advice: "Take prescribed antibiotics, avoid inserting objects into the ear, and consider surgical options if recommended."
  },
  "high fever, chills, muscle pain": {
    disease: "Malaria",
    advice: "Seek immediate medical attention, take prescribed antimalarial medications, and avoid mosquito bites."
  },
  "severe abdominal pain, bloating, vomiting": {
    disease: "Intestinal Obstruction",
    advice: "Seek immediate medical attention. Surgery may be required to remove the obstruction and prevent complications."
  },
  "persistent fatigue, sore throat, swollen lymph nodes": {
    disease: "Chronic Fatigue Syndrome (CFS)",
    advice: "Engage in gentle physical activity, manage stress, and consult with a healthcare provider for tailored treatment options."
  },
  "persistent sore throat, difficulty swallowing, hoarseness": {
    disease: "Throat Cancer",
    advice: "Seek immediate medical evaluation, avoid smoking and alcohol, and follow prescribed treatments."
  },
  "persistent pain, swelling, and redness in one leg": {
    disease: "Deep Vein Thrombosis (DVT)",
    advice: "Seek immediate medical attention, take prescribed blood thinners, and avoid prolonged immobility."
  },
  "persistent bloating, pelvic pain, frequent urination": {
    disease: "Ovarian Cancer",
    advice: "Seek medical evaluation, follow prescribed treatments, and consider lifestyle changes to improve overall health."
  },
  "persistent joint pain, fatigue, dry eyes": {
    disease: "Rheumatoid Arthritis",
    advice: "Follow prescribed medications, engage in physical therapy, and avoid overexertion to manage symptoms."
  },
  "frequent headaches, nausea, sensitivity to light and sound": {
    disease: "Cluster Headaches",
    advice: "Avoid known triggers, follow prescribed treatments, and maintain a regular sleep schedule."
  },
  "severe stomach pain, vomiting, unable to pass gas": {
    disease: "Bowel Obstruction",
    advice: "Seek immediate medical attention. Surgery may be necessary to remove the obstruction."
  },
  "persistent sore throat, white patches on tonsils, fever": {
    disease: "Strep Throat",
    advice: "Take prescribed antibiotics, rest, stay hydrated, and avoid close contact with others."
  },
  "persistent cough, chest tightness, shortness of breath": {
    disease: "Chronic Obstructive Pulmonary Disease (COPD)",
    advice: "Avoid smoking, use prescribed inhalers, engage in pulmonary rehabilitation, and avoid lung irritants."
  },
  "painful urination, pelvic pain, cloudy urine": {
    disease: "Kidney Infection (Pyelonephritis)",
    advice: "Take prescribed antibiotics, stay hydrated, and follow up with your healthcare provider for further evaluation."
  },
  "fever, fatigue, rash, joint pain": {
    disease: "Rheumatic Fever",
    advice: "Take prescribed antibiotics and anti-inflammatory medications, rest, and avoid overexertion."
  },
  "persistent sore throat, difficulty swallowing, ear pain": {
    disease: "Tonsillar Abscess",
    advice: "Seek immediate medical attention, take prescribed antibiotics, and avoid swallowing solid foods until symptoms improve."
  },
  "persistent back pain, difficulty walking, numbness": {
    disease: "Spinal Stenosis",
    advice: "Engage in physical therapy, avoid heavy lifting, and consider surgical options if recommended by your healthcare provider."
  },
  "sudden weakness, slurred speech, facial drooping": {
    disease: "Stroke",
    advice: "Seek immediate medical attention, follow prescribed treatments, and engage in physical and speech therapy for recovery."
  },
  "severe muscle pain, stiffness, weakness": {
    disease: "Polymyalgia Rheumatica",
    advice: "Take prescribed corticosteroids, engage in gentle physical activity, and seek regular medical evaluations."
  },
  "persistent fatigue, weakness, easy bruising": {
    disease: "Chronic Myeloid Leukemia (CML)",
    advice: "Follow prescribed treatments, engage in regular check-ups, and maintain a healthy lifestyle to support recovery."
  },
  "persistent chest pain, shortness of breath, dizziness": {
    disease: "Angina",
    advice: "Follow prescribed medications, avoid heavy physical activity, and consider lifestyle changes to reduce stress."
  },
  "persistent cough, weight loss, fatigue": {
    disease: "Non-Hodgkin's Lymphoma",
    advice: "Seek medical evaluation, follow prescribed treatments, and maintain a healthy lifestyle to support recovery."
  },
  "persistent pain in the lower abdomen, blood in urine": {
    disease: "Bladder Cancer",
    advice: "Seek immediate medical evaluation, follow prescribed treatments, and avoid smoking to reduce the risk of recurrence."
  },
  "persistent cough, shortness of breath, chest pain": {
    disease: "Mesothelioma",
    advice: "Seek immediate medical evaluation, follow prescribed treatments, and avoid exposure to asbestos."
  },
  "persistent fever, fatigue, weight loss": {
    disease: "Leishmaniasis",
    advice: "Seek medical evaluation, follow prescribed treatments, and avoid sandfly bites to prevent infection."
  },
  "persistent sore throat, hoarseness, difficulty breathing": {
    disease: "Laryngeal Cancer",
    advice: "Seek immediate medical evaluation, avoid smoking, and follow prescribed treatments."
  },
  "persistent headache, nausea, double vision": {
    disease: "Pituitary Tumor",
    advice: "Seek medical evaluation, follow prescribed treatments, and engage in regular check-ups to monitor the condition."
  },
  "persistent fever, chills, night sweats": {
    disease: "Brucellosis",
    advice: "Seek medical evaluation, take prescribed antibiotics, and avoid consuming unpasteurized dairy products."
  },
  "severe joint pain, swelling, redness": {
    disease: "Psoriatic Arthritis",
    advice: "Follow prescribed medications, engage in physical therapy, and avoid triggers that worsen symptoms."
  },
  "chest pain, shortness of breath": {
    "disease": "Myocardial Infarction",
    "advice": "Call emergency services immediately and seek medical attention."
  },
  "fever, cough, difficulty breathing": {
    "disease": "COVID-19",
    "advice": "Get tested for COVID-19, self-isolate, and follow public health guidelines."
  },
  "abdominal pain, diarrhea, vomiting": {
    "disease": "Gastroenteritis",
    "advice": "Stay hydrated and consult a healthcare professional if symptoms persist."
  },
  "persistent cough, weight loss, night sweats": {
    "disease": "Tuberculosis",
    "advice": "Seek medical evaluation and adhere to prescribed tuberculosis treatment."
  },
  "nausea, vomiting, abdominal pain": {
    "disease": "Appendicitis",
    "advice": "Seek emergency medical evaluation for possible surgical intervention."
  },
  "fatigue, joint pain, rash": {
    "disease": "Lupus",
    "advice": "Follow prescribed medications and manage symptoms with lifestyle changes."
  },
  "sudden headache, vision changes, nausea": {
    "disease": "Migraine",
    "advice": "Avoid known triggers and consider preventive medications."
  },
  "persistent fatigue, weakness, pale skin": {
    "disease": "Anemia",
    "advice": "Consult a healthcare provider for dietary recommendations and possible supplementation."
  },
  "severe headache, nausea, sensitivity to light": {
    "disease": "Migraine",
    "advice": "Rest in a dark, quiet room and consider over-the-counter pain relief."
  },
  "tingling, numbness, weakness": {
    "disease": "Multiple Sclerosis",
    "advice": "Work closely with a neurologist to manage symptoms and treatment."
  },
  "throat pain, difficulty swallowing, fever": {
    "disease": "Strep Throat",
    "advice": "Seek medical evaluation for possible antibiotic treatment."
  },
  "abdominal bloating, gas, diarrhea": {
    "disease": "Irritable Bowel Syndrome (IBS)",
    "advice": "Manage triggers through dietary changes and stress management."
  },
  "numbness in hands and feet, muscle weakness": {
    "disease": "Diabetic Neuropathy",
    "advice": "Control blood sugar levels and consult a healthcare provider for management."
  },
  "persistent cough, wheezing, chest tightness": {
    "disease": "Asthma",
    "advice": "Follow prescribed asthma action plans and carry rescue inhalers."
  },
  "itchy skin, rash, hives": {
    "disease": "Allergic Reaction",
    "advice": "Avoid known allergens and consider antihistamines as needed."
  },
  "painful urination, frequent urination": {
    "disease": "Urinary Tract Infection",
    "advice": "Seek medical evaluation for possible antibiotic treatment."
  },
  "bloating, abdominal pain, changes in bowel habits": {
    "disease": "Celiac Disease",
    "advice": "Adhere to a strict gluten-free diet and consult a dietitian."
  },
  "sudden weakness, slurred speech, facial drooping": {
    "disease": "Stroke",
    "advice": "Seek emergency medical attention immediately."
  },
  "persistent sore throat, white patches on tonsils": {
    "disease": "Tonsillitis",
    "advice": "Seek medical evaluation for possible treatment options."
  },
  "severe abdominal pain, fever, jaundice": {
    "disease": "Cholecystitis",
    "advice": "Seek immediate medical evaluation, possibly for surgery."
  },
  "severe fatigue, hair loss, cold intolerance": {
    "disease": "Hypothyroidism",
    "advice": "Follow prescribed thyroid hormone replacement therapy."
  },
  "rapid heartbeat, sweating, anxiety": {
    "disease": "Hyperthyroidism",
    "advice": "Consult an endocrinologist for management options."
  },
  "pain in the chest, shoulder, arm": {
    "disease": "Angina",
    "advice": "Seek medical evaluation to assess heart health."
  },
  "swollen lymph nodes, fever, fatigue": {
    "disease": "Lymphoma",
    "advice": "Consult an oncologist for evaluation and treatment options."
  },
  "muscle cramps, weakness, fatigue": {
    "disease": "Electrolyte Imbalance",
    "advice": "Replenish fluids and electrolytes, and consult a healthcare provider."
  },
  "pain in the joints, fatigue, fever": {
    "disease": "Rheumatoid Arthritis",
    "advice": "Follow prescribed medications and consider physical therapy."
  },
  "confusion, memory loss, difficulty concentrating": {
    "disease": "Dementia",
    "advice": "Seek medical evaluation and consider supportive therapies."
  },
  "sensitivity to light, redness in eyes, vision problems": {
    "disease": "Uveitis",
    "advice": "Consult an ophthalmologist for evaluation and treatment."
  },
  "painless lump, change in bowel habits": {
    "disease": "Colon Cancer",
    "advice": "Seek medical evaluation for screening and possible treatment."
  },
  "chronic cough, wheezing, chest pain": {
    "disease": "Chronic Obstructive Pulmonary Disease (COPD)",
    "advice": "Follow prescribed medications and pulmonary rehabilitation."
  },
  "sudden weight loss, fatigue, skin changes": {
    "disease": "Cancer",
    "advice": "Seek immediate medical evaluation for diagnostic testing."
  },
  "excessive thirst, frequent urination, fatigue": {
    "disease": "Diabetes Mellitus",
    "advice": "Manage blood sugar levels with diet, exercise, and medication."
  },
  "difficulty focusing, mood swings, changes in sleep patterns": {
    "disease": "Bipolar Disorder",
    "advice": "Seek mental health support and consider medication management."
  },
  "numbness, tingling, muscle weakness": {
    "disease": "Guillain-Barré Syndrome",
    "advice": "Seek immediate medical attention for evaluation."
  },
  "chronic pain, fatigue, sleep disturbances": {
    "disease": "Fibromyalgia",
    "advice": "Consider multidisciplinary management for symptom relief."
  },
  "loss of balance, dizziness, headache": {
    "disease": "Vestibular Disorders",
    "advice": "Consult an ear, nose, and throat specialist for evaluation."
  },
  "pain in the lower back, leg numbness": {
    "disease": "Herniated Disc",
    "advice": "Consult a healthcare provider for treatment options."
  },
  "persistent cough, hoarseness, difficulty swallowing": {
    "disease": "Laryngeal Cancer",
    "advice": "Seek medical evaluation for diagnostic testing."
  },
  "stomach cramps, diarrhea, fever": {
    "disease": "Food Poisoning",
    "advice": "Stay hydrated and consult a healthcare provider if symptoms worsen."
  },
  "abdominal pain, fatigue, jaundice": {
    "disease": "Hepatitis",
    "advice": "Seek medical evaluation for diagnosis and management."
  },
  "thickened skin, itching, patches on skin": {
    "disease": "Psoriasis",
    "advice": "Follow prescribed topical treatments and lifestyle modifications."
  },
  "fever, fatigue, headache": {
    "disease": "Viral Infection",
    "advice": "Rest, stay hydrated, and consult a healthcare provider if symptoms worsen."
  },
  "dry eyes, mouth, fatigue": {
    "disease": "Sjogren's Syndrome",
    "advice": "Consult a healthcare provider for symptom management."
  },
  "painful joints, morning stiffness, fatigue": {
    "disease": "Osteoarthritis",
    "advice": "Follow prescribed treatment plans and consider physical therapy."
  },
  "severe headaches, visual disturbances, high blood pressure": {
    "disease": "Preeclampsia",
    "advice": "Seek immediate medical evaluation during pregnancy."
  },
  "abdominal pain, fatigue, nausea": {
    "disease": "Chronic Pancreatitis",
    "advice": "Consult a healthcare provider for dietary recommendations and management."
  },
  "severe headache, neck stiffness, fever": {
    "disease": "Meningitis",
    "advice": "Seek emergency medical evaluation immediately."
  },
  "chronic cough, frequent infections, fatigue": {
    "disease": "Cystic Fibrosis",
    "advice": "Follow a comprehensive care plan with healthcare providers."
  }
};

export function getDiseaseAdvice(symptoms) {
  console.log("getDiseaseAdvice called with symptoms:", symptoms);
  const skey = symptoms.join(", ").toLowerCase();

  const matches = [];

  for (const [symptomKey, data] of Object.entries(diseaseData)) {
    const matchCount = skey.split(", ").filter(symptom => symptomKey.toLowerCase().includes(symptom)).length;
    const totalSymptoms = skey.split(", ").length;
    
    if (matchCount > 0) {
      matches.push({
        disease: data.disease,
        advice: data.advice,
        matchPercentage: (matchCount / totalSymptoms) * 100
      });
    }
  }

  if (matches.length === 0) {
    matches.push({
      disease: "Unknown",
      advice: "Consult a healthcare provider for a more accurate diagnosis and advice.",
      matchPercentage: 0
    });
  }

  return matches.sort((a, b) => b.matchPercentage - a.matchPercentage);
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
