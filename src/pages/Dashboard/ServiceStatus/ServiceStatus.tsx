import React from "react";
import {Chip} from "@mui/material";
import {ServiceStatusTypes, Status} from "../../../models/Status";
import {useData} from "../../../hooks/useData";
import {getStatus} from "../../../api/status.http";

export const ServiceStatus: React.FC = () => {

  const {data: status} = useData<Status>({key: 'status', fetcher: getStatus})

  const statusColors = {
    [ServiceStatusTypes.UP]: 'success',
    [ServiceStatusTypes.DOWN]: 'error',
    [ServiceStatusTypes.WARNING]: 'warning',
    [ServiceStatusTypes.UNKNOWN]: 'default',
  } as const

  return (
    <>
      {status && Object.entries(status).map(([service, status]) => <Chip label={service} color={statusColors[status]}/>)}
    </>
  );
}