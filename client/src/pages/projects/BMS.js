import React from "react";
import "../../assets/css/pages/bms.css";

export default function BMS() {
  return (
    <>
      <div class="containers container d-flex justify-content-center p-2">
        <p4>Design and Implementation of Battery Management System</p4>
      </div>
      {/* <h1 className="text-3xl font-bold ">Home</h1> */}

      <div class="containers container">
        <p>
          <p1>Title</p1> - Design and Implementation of Battery Management
          System for Electric Vehicles <br />
          <br />
          <p1>Year</p1> - 2020-2021 <br />
          <br />
          <p1>Domain</p1> - Electrical & Electronics (Energy Storage &
          Management) <br />
          <br />
          <p1>Problem Statement</p1> - Design and Implementation of Battery
          Management System 
          <br />
          <br />
          <p1>Description</p1>
          <p>
            As humanity is evolving the consumption of energy is increased.
            Continue power supply is not possible everywhere. So that we require
            energy storage devices. The stored energy is used in the places
            where the supply of energy is not available. The stored energy need
            to be a monitor protected and easy to use. With rapidly evolving
            technology of the smart grid and electric vehicles (EVs), the
            battery has emerged as the most prominent energy storage device,
            attracting a significant amount of attention. The battery is a
            fundamental component of electric vehicles, standalone & other
            portable devices, which represents a step forward towards
            sustainable mobility. As an electrochemical product, a battery acts
            differently under different operational and environmental
            conditions.<span id="dots">...</span>
            <span id="more">
              <br />
              <br />
              The uncertainty of a battery’s performance poses a challenge to
              the implementation of these functions. It is a critical component
              of many electronics and electrical devices. Due to their high
              efficiency and high energy density, lithium-ion batteries have
              been adopted for mobile electronic devices and electric vehicles.
              Battery have been increasingly used further for various
              applications, such as small mobility vehicles (electric
              motorcycles, golf carts, etc.), stationary batteries for HEMS (
              High Energy Management System ), trucks/buses and industry
              machinery. The very recent problem of pandemic have laid a
              increased risk of power failure and power demand, which on the
              edge resulted to a shortage of power supply and resources, this
              problem has emerged a bigger threat to many researches,
              manufacturing & production units, education and many other
              essential services, to satisfy their needs. Therefore this project
              on battery technology is helpful in satisfying their needs, which
              is growing very quickly, developing cells structure with higher
              power and energy densities, it is equally important to improve the
              performance of the battery management system (BMS) to make the
              battery a safe, reliable, and cost-efficient solution, to supply
              energy needs under power failure and even during power supply with
              self-sustaining technology to cater any load variations and
              demands.
              <br />
              <br />
              A battery management system (BMS) is an electronic regulator that
              monitors and controls the charging and discharging of rechargeable
              batteries. It is simply battery monitoring, keeping a check on the
              key operational parameters during charging and discharging such as
              voltages, currents and the battery internal and ambient
              temperature. The monitoring circuits would normally provide inputs
              to protection devices which would generate alarms or disconnect
              the battery from the load or charger should any of the parameters
              become out of limits. The specific characteristics and needs of
              the smart grid and EVs, such as deep charge/discharge protection
              and accurate state-of-charge (SOC) and state-of-health (SOH)
              estimation, intensify the need for a more efficient BMS. The BMS
              should contain accurate algorithms to measure and estimate the
              functional status of the battery and, at the same time, be
              equipped with state-of-the-art mechanisms to protect the battery
              from hazardous and inefficient operating conditions. This BMS
              include the best choice of the cell materials and the development
              of electronic circuits and algorithms for a more effective battery
              utilization Our project on Battery management system is providing
              the function of monitoring the storage energy protection from
              overload and overheating and easy to use for charging and
              discharging purpose. The stored energy can be transferred from one
              place to another place easily in the form of battery, cells or any
              store energy storage device. This project initially reviews the
              most interesting modeling approaches for predicting the battery
              performance and discusses the demanding requirements and standards
              that apply to ICs and systems for battery management. Then, a
              general and flexible architecture for battery management
              implementation and the main techniques for state-of-charge
              estimation and charge balancing are analysed, simulated and
              reported. Finally, we describe the design and implementation of an
              innovative BMS, which incorporates an almost fully-integrated
              active charge equalizer.
              <br />
              <br />
              <p1>Advantages</p1>
              <br />
              1] A BMS enhances the life span of the battery cells in EVs.
              <br />
              2] This is an effective system to measure and control the cell’s
              voltage.
              <br />
              3] It provides stability and reliability and it forecasts the
              battery pack’s capabilities in the near future.
              <br />
              4] It ensures the safety of the battery pack, especially large
              format lithium-ion batteries.
              <br />
              5] It optimises the performance of the electric car battery.
              <br />
              6] It monitors the battery cells constantly to avoid the
              occurrence of failure or explosion.
              <br />
              7] A BMS helps to track any problems such as excessive heat,
              smoke, fire, etc, that can ruin the cells.
              <br />
              8] It controls the temperature, maintaining it at the ideal or
              optimum 45 degrees Celsius for EV batteries.
              <br />
              9] It gives an indication of how long the battery’s charge will
              last before it needs recharging.
              <br />
              <br />
              <p1>Keywords</p1>
              <br />
              Battery management system; battery (lithium-ion or any), Battery
              cell monitoring, protection, energy balancing, energy management,
              Temperature-Voltage Controlling, etc.
            </span>
          </p>
          <button onclick="myFunction()" id="myBtn">
            Read more
          </button>
        </p>
      </div>
    </>
  );
}
