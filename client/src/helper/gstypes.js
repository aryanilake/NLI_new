import monopole from '../assets/monopole.jpg';
import qfh from '../assets/QFH antenna.jpg';
import swr from '../assets/swr.jpg';
import yagi from '../assets/Yagi-uda.jpg';
import dipole from '../assets/Dipole antenna.jpg';
import vna from '../assets/VNA.jpg';
import transceiver from '../assets/Transceiver.jpg';
import v from '../assets/Inverted_V(antenna).jpg';

export const antennas = [
    {
        title: "Monopole antenna",
        image: monopole,
        details: "The monopole antenna serves as a versatile and extensively utilized antenna type that is suitable for a variety of communication applications. With its straightforward design, ease of construction, and omnidirectional radiation pattern, it is a favored option in broadcasting, mobile communications,satellite communications and other RF systems."
    },
    {
        title: "SWR meter",
        image: swr,
        details: "The SWR meter is a key tool for amateur radio and satellite hobbyists, used to measure the ratio of reflected to transmitted power, ensuring efficient antenna performance. By calculating the SWR, operators can verify if their antenna is properly matched to the feedline, minimizing signal reflection and enhancing transmission. For ham radio and satellite communications, it helps fine-tune antennas, prevent transmitter damage, and improve signal quality and communication efficiency."
    },
    {
        title: "Yagi-Uda",
        image: yagi,
        details: "The Yagi-Uda antenna proves to be a highly efficient and adaptable option for VHF applications, satellite tracking, providing substantial gain and focus."
    },
    
    {
        title: "Dipole antenna",
        image: dipole,
        details: "The dipole antenna is a simple to design and fabricate omni-directional antenna. It is used in terrestrial communications over VHF, UHF rf bands. More often, it can be utilized as a receiving antenna for LEO satellite beacons."
    },
    {
        title: "VNA antenna",
        image: vna,
        details: "The NanoVNA is a small and lightweight vector network analyzer created for examining antennas and RF components. It is capable of assessing important properties like impedance, reflection loss, and transmission loss across a wide frequency range, providing users with valuable insights into the performance of various RF devices. Equipped with a built-in LCD display for showcasing data such as magnitude plots and Smith charts, it is also an attractive option for hobbyists and educational purposes due to its affordability and compact dimensions. The NanoVNA's connectivity options and calibration capabilities enhance its suitability for RF testing and design."
    },
    {
        title: "Transceiver",
        image: transceiver,
        details: "The Icom IC-718 is a versatile HF transceiver with USB, LSB, CW, RTTY (FSK), and AM modes, known for its user-friendly features and robust performance. It includes an automatic antenna tuner and a clear LCD display, making it a popular choice among amateur radio operators for reliable transmission and reception.The Icom IC-2730A is a VHF/UHF transceiver supporting FM, AM, and digital modes. With dual watch functionality, strong power output, and easy-to-use controls, it's suitable for mobile or base station use, offering dependable communication with ham operators on VHF and UHF bands."
    },
]

export const inverted = 
    {
        title: "Inverted v long wire antenna",
        image: v,
        details: "The inverted V dipole has the potential to create a successful antenna system suited for the HF amateur radio bands or for various other uses in many situations.On the lower-frequency amateur bands, the inverted-V is well-regarded for long-distance communication when it is impractical to install large verticals or high horizontal dipoles.Long range communications with other HAM operators are facilitated by the installation of 40m, 20m, 15m, and 10m bands."
    }
export const QFH = 
    {
        title: "QFH antenna",
        image: qfh,
        details: "The Quadrifilar Helix (QFH) antenna is renowned for its circular polarization, which allows it to receive signals regardless of the satellite's orientation. This makes it highly effective for capturing signals from low-earth orbit (LEO) satellites, which often have variable positions and angles relative to the ground station. Its circular polarization also reduces signal fading caused by polarization mismatches, ensuring more reliable reception.The QFH antenna is especially useful for Very High Frequency (VHF) applications, such as receiving weather satellite signals, as it can handle the broad beamwidth and wide signal coverage required for satellite communication. Its robust design, ability to pick up signals from multiple satellite passes, and excellent omnidirectional reception make it a favored choice for VHF users looking to track weather satellites and other LEO transmissions."
    }
