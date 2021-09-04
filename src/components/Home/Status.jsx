import React from "react";
import { GET_STATUS } from "../../query";
import { useQuery } from "@apollo/client";
import StatusCard from "./StatusCard";

function Status() {
  const { data, loading } = useQuery(GET_STATUS);
  return (
    <div>
      {data && !loading && (
        <div className="grid gap-6 mb-8 md:grid-cols-1 lg:grid-cols-3">
          <StatusCard
            title="Total Requests"
            value={`${data.status.toalRequests}`}
            svg={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            }
          />

          <StatusCard
            title="Total Teams"
            value={`${data.status.totalTeams}`}
            svg={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                ariaHidden="true"
                className="h-6 w-6 svg-inline--fa fa-futbol fa-w-16"
                data-icon="futbol"
                data-prefix="fal"
                viewBox="0 0 496 512"
              >
                <path
                  fill="currentColor"
                  d="M483.7 179.4C449.7 74.6 352.5 8 248.1 8 81.2 8-40 171.4 12.3 332.6 46.3 437.4 143.7 504 248 504c166.9 0 288-163.4 235.7-324.6zm-43 173.7l-94.3 11.6-17.8-24.9 33.7-104.1 28.9-9 69.6 65c-3.6 21.1-10.3 41.8-20.1 61.4zM35.6 291.5l69.4-64.9 28.9 9 33.9 103.7-18.1 25.2-94.2-11.6c-13-26-17.2-45.2-19.9-61.4zm196.5-180.7v32.9L146.2 206l-31.5-9.8-18-93.9c15.3-15.1 32.8-27.8 52-37.8l83.4 46.3zm149.4 85.4L350 206l-85.9-62.3v-32.9l83.6-46.4c19.1 10 36.7 22.7 52 37.9l-18.2 93.9zm-215.4 35l82-59.5 82.1 59.6-31.1 96H197.5l-31.4-96.1zm297.7 19.5L412.7 203l13.3-68.3c34.5 50.8 37.3 97.2 37.8 116zM309.2 49.2l-61.1 33.9-61-33.8c71.5-21.2 122-.1 122.1-.1zM70.3 134.1L83.5 203l-51.1 47.5c.8-31.8 8.7-63.4 23.6-92.6 4.2-8.3 9.1-16.2 14.3-23.8zm7.5 254l68.7 8.4 29.2 62.7c-38.8-13.8-72.7-38.5-97.9-71.1zm137.9 81.3l-40.1-86 17.4-24.2h110.2l17.3 24.2-40.1 86c-22.7 3.5-42.4 3.4-64.7 0zm104.8-10.2l29.2-62.7 69-8.5c-25 32.6-58.8 57.1-98.2 71.2z"
                ></path>
              </svg>
            }
          />

          <StatusCard
            title="Total Blacklist"
            value={`${data.status.totalBlacklists}`}
            svg={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                ariaHidden="true"
                className="h-6 w-6 svg-inline--fa fa-ban fa-w-16"
                data-icon="ban"
                data-prefix="fas"
                viewBox="0 0 512 512"
              >
                <path
                  fill="currentColor"
                  d="M256 8C119.034 8 8 119.033 8 256s111.034 248 248 248 248-111.034 248-248S392.967 8 256 8zm130.108 117.892c65.448 65.448 70 165.481 20.677 235.637L150.47 105.216c70.204-49.356 170.226-44.735 235.638 20.676zM125.892 386.108c-65.448-65.448-70-165.481-20.677-235.637L361.53 406.784c-70.203 49.356-170.226 44.736-235.638-20.676z"
                ></path>
              </svg>
            }
          />
        </div>
      )}
    </div>
  );
}

export default Status;
