export function getDetailedRocketDetails(rocket) {
  const unitSymbols = {
    meter: "m",
    feet: "ft",
    cubicMeter: "m³",
    cubicFeet: "ft³",
    kilograms: "kg",
    pounds: "lbs",
  };

  const formatValue = (metric, imperial, unitMetric, unitImperial) => {
    return `${metric} ${unitMetric} / ${imperial} ${unitImperial}`;
  };

  return [
    {
      name: "Heat shield material",
      value: rocket.heat_shield.material,
    },
    {
      name: "Heat shield temperature",
      value: rocket.heat_shield.temp_degrees.toString(),
    },
    {
      name: "Pressurized capsule volume",
      value: formatValue(
        rocket.pressurized_capsule.payload_volume.cubic_meters,
        rocket.pressurized_capsule.payload_volume.cubic_feet,
        unitSymbols.cubicMeter,
        unitSymbols.cubicFeet
      ),
    },
    {
      name: "Thrusters amount",
      value: rocket.thrusters
        .reduce((acc, thruster) => acc + thruster.amount, 0)
        .toString(),
    },
    {
      name: "Dry mass",
      value: formatValue(
        rocket.dry_mass_kg,
        rocket.dry_mass_lb,
        unitSymbols.kilograms,
        unitSymbols.pounds
      ),
    },
  ];
}
