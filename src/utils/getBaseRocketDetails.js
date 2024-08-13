export function getBaseRocketDetails(rocket) {
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
      name: "Height",
      value: formatValue(
        rocket.height_w_trunk.meters,
        rocket.height_w_trunk.feet,
        unitSymbols.meter,
        unitSymbols.feet
      ),
    },
    {
      name: "Diameter",
      value: formatValue(
        rocket.diameter.meters,
        rocket.diameter.feet,
        unitSymbols.meter,
        unitSymbols.feet
      ),
    },
    {
      name: "Spacecraft volume",
      value: formatValue(
        rocket.launch_payload_vol.cubic_meters,
        rocket.launch_payload_vol.cubic_feet,
        unitSymbols.cubicMeter,
        unitSymbols.cubicFeet
      ),
    },
    {
      name: "Trunk volume",
      value: formatValue(
        rocket.trunk.trunk_volume.cubic_meters,
        rocket.trunk.trunk_volume.cubic_feet,
        unitSymbols.cubicMeter,
        unitSymbols.cubicFeet
      ),
    },
    {
      name: "Launch payload mass",
      value: formatValue(
        rocket.launch_payload_mass.kg,
        rocket.launch_payload_mass.lb,
        unitSymbols.kilograms,
        unitSymbols.pounds
      ),
    },
    {
      name: "Return payload mass",
      value: formatValue(
        rocket.return_payload_mass.kg,
        rocket.return_payload_mass.lb,
        unitSymbols.kilograms,
        unitSymbols.pounds
      ),
    },
  ];
}
