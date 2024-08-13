import { getBaseRocketDetails } from "./getBaseRocketDetails";
import { getDetailedRocketDetails } from "./getDetailedRocketDetails";

export default function getRocketDetails(rocket, detailed) {
  const baseDetails = getBaseRocketDetails(rocket);

  if (!detailed) {
    return baseDetails;
  }

  const extraDetails = getDetailedRocketDetails(rocket);

  return [...baseDetails, ...extraDetails];
}
