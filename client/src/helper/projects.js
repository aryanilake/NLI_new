import beliefSat0 from '/assets/BeliefSat-0.jpg'; 
import beliefSat1 from '/assets/BeliefSat-1.jpg'; 
import avruti from '/assets/Avruti1.jpg'; 
import uass from '/assets/UASS.jpg'; 
import somaiyaPod from '/assets/Somaiya-Pod.jpg'; 
// import crownGs from '../assets/Crown-GS.jpg'; 

export const projects = [
    {
        projname: "BeliefSat-0",
        active: true,
        about: "BeliefSat-0 is developed by students of K.J. Somaiya Institute of Technology to widen the reach of Amateur Radio-operators around the globe. The payload is a part of tribute to 100 years of Amateur Radio in India and meant to be in service to the Amateur radio community worldwide. The payload performs UHF to VHF FM Voice Repeating and APRS Digipeating. Working of BeliefSat-0: The satellite was launched through PSLV, this opportunity was presented by IN-SPACe (ISRO) as a part of their POEM (PSLV Orbital Experimental Module). The satellite was positioned in 350km orbit with 9-degree inclination. Its major function is voice repeating and APRS digipeating for the HAM radio community as our project main aim is to widen the reach of the HAM radio operators.",
        photo: beliefSat0
    },
    {
        projname: "BeliefSat-1",
        active: true,
        about: "BeliefSat stands as a remarkable 2p-PocketQube standard student nano-satellite, set to embark on its journey from the 'SomaiyaPod,' an indigenous PocketQube standard deployer developed at the institute. The satellite's construction technique revolves around a unique combination of COTS components for communication, on-board computer, and power sub-systems. BeliefSat represents a fusion of ingenuity, precision engineering, and vision, making it a promising contender in the realm of nano-satellites and space exploration.",
        photo: beliefSat1
    },
    {
        projname: "Avruti",
        active: true,
        about: "Avruti is a deep learning project implemented by the Data Science Team at New Leap Labs. This weather prediction project uses Generative Adversarial Networks (GANs) for generating future cloud patterns and Recurrent Neural Networks (RNNs) for predicting important weather parameters like temperature, humidity, pressure, rainfall, etc. 50+ years of tabular weather data was obtained from the Indian Meteorological Department (IMD), and 6000+ satellite images were sourced from AccuWeather.",
        photo: avruti
    },
    {
        projname: "UASS",
        active: true,
        about: "UASS involves obtaining vertical meteorological parameter profiles. The system includes components such as Ground receiver, computing system, antennas, and a hydrogen-filled Met balloon with a radiosonde. Radiosonde measures various parameters like Pressure, Temperature, Wind Speed, Wind Direction, and Humidity. The system operates in extreme conditions with a transmission range of 200 km.",
        photo: uass
    },
    {
        projname: "Somaiya-Pod",
        active: true,
        about: "The SomaiyaPod, a domestically developed 2P standard PocketQube Deployer Bus, aims to demonstrate the technology readiness of a 2P standard pico satellite. It is compatible with any 2P nano-satellite and positions India for self-sufficiency in launching PocketQubes. The SomaiyaPod employs a pin-puller mechanism and is constructed using Aluminum 6061 for the external structure.",
        photo: somaiyaPod
    },
    {
        projname: "Crown-GS",
        active: true,
        about: "The team is developing an Automated Ground Station system for BeliefSat-1. The system is designed to be a cost-effective and flexible platform for tracking Low Earth Orbital Satellites. It consists of a Yagi Uda antenna in the 2m HAM band, mounted on a rotator mechanism, and a Base Transceiver System that communicates with the satellite and displays the received data on the web server.",
        photo: ""
    }
];
