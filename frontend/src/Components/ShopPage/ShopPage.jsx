import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { devicesApi } from "../../api/App";
import { Button, Container, Grid, Stack, Typography } from "@mui/material";
import styles from "./shopStyle.module.css";

const ShopPage = () => {
  const { type, productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await devicesApi.get(`api/${type}/${productId}`);
        setProduct(response.data.data.attributes);
      } catch (error) {
        console.error("Error fetching product data: ", error);
      }
    };
    fetchData();
    console.log(product);
  }, [type, productId]);

  useEffect(() => {
    console.log(product);
  }, [product]);

  return (
    <div className={styles.container}>
      <Container maxWidth="xl" sx={{ marginTop: "50px" }}>
        <Grid container spacing={8} className={styles.container}>
          <Grid item xs={12} sm={6} className={styles.imgPosition}>
            {product ? (
              <img src={product.img} className={styles.img} alt="" />
            ) : (
              <p>Loading...</p>
            )}
          </Grid>

          <Grid item xs={12} sm={6}>
            <Stack spacing={8}>
              <Stack spacing={2}>
                <Typography variant="h6" fontSize="18px">
                  BRAND NAME
                </Typography>
                {product && (
                  <Typography variant="h4">{product.model}</Typography>
                )}
              </Stack>

              <Typography variant="body1" paragraph>
                {product && product.detail}
              </Typography>
              <Grid className={styles.button}>
                {product && (
                  <Typography variant="h5" fontWeight="bold">
                    {"$" + product.price}
                  </Typography>
                )}

                <Button variant="contained">Buy now</Button>
              </Grid>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default ShopPage;
