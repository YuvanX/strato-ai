import axios from "axios";

export async function validateEmail(email: string): Promise<boolean> {
  const API_KEY = process.env.ABSTRACT_API_KEY;

  try {
const response = await axios.get(
    `https://emailvalidation.abstractapi.com/v1/?api_key=${API_KEY}&email=${email}`
  );
  const data = response.data;

  const isDeliverable =
    data.deliverability === "DELIVERABLE" &&
    data.is_valid_format.value === true &&
    data.is_smtp_valid.value === true;

  return isDeliverable;
  } catch(err) {
    console.log(err)
    return false
  }
}
