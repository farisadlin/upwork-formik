import React, { useState } from "react";
import { Card, CardContent, Typography } from "@material-ui/core";

export default function MediaCard(props) {
  const { productType } = props;

  return (
    <Card>
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          <img src={URL?.createObjectURL(productType)} />
          {productType.name}
        </Typography>
      </CardContent>
    </Card>
  );
}
