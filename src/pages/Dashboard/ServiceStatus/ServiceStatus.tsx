import React from "react";
import {Chip} from "@mui/material";
import {ServiceStatusTypes, Status} from "../../../models/Status";
import {useData} from "../../../hooks/useData";
import {getStatus} from "../../../api/status.http";
import {Loader} from "../../../components/Loader";

export const ServiceStatus: React.FC = () => {

  const {data: status, isLoading} = useData<Status>({key: 'status', fetcher: getStatus})

  const statusColors = {
    [ServiceStatusTypes.UP]: 'success',
    [ServiceStatusTypes.DOWN]: 'error',
    [ServiceStatusTypes.WARNING]: 'warning',
    [ServiceStatusTypes.UNKNOWN]: 'default',
  } as const

  return (
    <>
      {isLoading && <Loader/>}
      {status && Object.entries(status).map(([service, status]) => <Chip label={service} color={statusColors[status]}/>)}
    </>
  );
}