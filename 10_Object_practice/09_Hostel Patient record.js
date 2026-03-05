

const patient =
{
    patientName : "Rampal",
    age : 50,

    medicalHistory:
    ["Fever", "Back pain"],
    
    currentMedications : 
    ["Paracetamol"],

    doctor :
    {
        name : "Dr. Sharma",
        department : "Orthopedic"
    },

    addMedication(medicine)
    {
        this.currentMedications.push(medicine);
        console.log(`${medicine} added to medications`)
    }
}

patient.addMedication("dolo") 
console.log(patient.currentMedications)

console.log(patient)

console.log(patient.doctor.name)




