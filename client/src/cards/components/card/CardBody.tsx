import React from "react";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import { Divider } from "@mui/material";
import CardInterface from "../../interfaces-20230423T085937Z-001/interfaces/CardInterface";
import CardBodyRow from "./CardBodyRow";

type Props = { card: CardInterface };

const CardBody: React.FC<Props> = ({ card }) => {
  //   const { street, houseNumber, country } = address;
  const { title, subtitle, phone, address, bizNumber } = card;
  return (
    <CardContent sx={{ pb: 1 }}>
      <CardHeader title={title} subheader={subtitle} sx={{ p: 0, mb: 1 }} />
      <Divider />
      <CardBodyRow title="phone" content={phone} />
      <CardBodyRow
        title="address"
        content={`${address.city} ${address.houseNumber} ${address.country}`}
      />
      <CardBodyRow title="card number" content={String(bizNumber)} />
    </CardContent>
  );
};

export default CardBody;
