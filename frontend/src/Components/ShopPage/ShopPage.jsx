import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { devicesApi } from "../../api/App";
import { Button, Container, Grid, Stack, Typography } from "@mui/material";
import styles from "../../styles/shopStyle.module.css";

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
      <Container
        maxWidth="xl"
        sx={{
          background: "#7a7d7d",
          borderRadius: "20px",
          height: "fit-content",
        }}
      >
        <Grid container spacing={8} className={styles.container}>
          <Grid item xs={12} sm={6} className={styles.imgPosition}>
            {product ? (
              <img src={product.img} className={styles.img} alt="" />
            ) : (
              <p>Loading...</p>
            )}
          </Grid>

          <Grid item xs={12} sm={6} lg={5}>
            <Stack spacing={2}>
              <Grid pt={10}>
                <Typography
                  variant="h6"
                  fontSize="18px"
                  className={styles.shopTextColor}
                >
                  BRAND NAME
                </Typography>
                {product && (
                  <Typography
                    variant="h4"
                    height={80}
                    fontSize={30}
                    className={styles.shopTextColor}
                  >
                    {product.model}
                  </Typography>
                )}
              </Grid>

              <Stack spacing={3}>
                <Typography variant="h5" className={styles.shopTextColor}>
                  Design
                </Typography>
                <Typography
                  variant="body1"
                  paragraph
                  className={styles.shopTextColor}
                >
                  {product && product.detail}
                </Typography>
              </Stack>

              <Stack spacing={3}>
                <Typography variant="h5" className={styles.shopTextColor}>
                  Performance
                </Typography>
                <Typography
                  variant="body1"
                  paragraph
                  className={styles.shopTextColor}
                >
                  {product && product.performance}
                </Typography>
              </Stack>

              <Grid
                className={`${styles.button} ${styles.shopTextColor}`}
                pb={5}
                pt={10}
              >
                {product && (
                  <Typography
                    variant="h5"
                    fontWeight="bold"
                    fontSize={30}
                    className={styles.shopTextColor}
                  >
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
