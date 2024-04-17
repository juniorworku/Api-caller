import { useParams } from "@solidjs/router";
import { createResource } from "solid-js";
import { restRequests } from "../store/store";

/**
 * Data function
 * @param id- Requested ID
 */
export const fetchSelectedRequest = () => {
  const params = useParams(); // Access route parameters using useParams
  const { id } = params; // Destructure the id from route parameters
  console.log("Fetching request data for id:", id); // Log the current ID for debugging
  const [request] = createResource(
    () => id, // Ensure the function depends on the id parameter
    () =>
      new Promise((resolve) => {
        setTimeout(() => {
          try {
            const requestData = restRequests()?.find((r) => r.id === id);
            resolve(requestData);
          } catch (error) {
            console.error("Error fetching request data:", error);
            resolve(null);
          }
        }, 500);
      })
  );
  return request;
};
