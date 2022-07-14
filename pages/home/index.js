import Layout from "../../components/Layout/Layout";
import { useRouter } from "next/router";
import postModel from "../../models/postModel";
import DBConnect from "../../libs/dbConnect";
import { Typography, Paper, Button } from "@material-ui/core";
import { useEffect, useState } from "react";
import useStyles from "./styles";
import { useDispatch } from "react-redux";
import { handleLogout } from "../../utils/handleLogout";
import HomeCliente from "../../components/Home/HomeCliente";


export default function Home({Postss}) {
  const router = useRouter()
  const classes = useStyles();
  const dispatch = useDispatch();
  const [user, setUser] = useState();

  if (user?.result.role.length > 1) {
    router.push(`/home/${user?.result._id}`);
  }

  if (user === null) {
    router.replace("/auth");
  }


  
  
  return (
    <>
      <Layout title={"Home | colMotors"}>
      {user?.result.role.length === 1 && (
        <>
          {user?.result.status !== "VERIFIED" ? (
            <Paper className={classes.paper} elevation={3}>
              <div className={classes.div3}>
                <Error style={{ paddingRight: "10px", color: "#f50057" }} />
                <Typography
                 className={classes.typo}
                >
                  Ingresa a tu correo y valida la cuenta, para que puedas
                  cotizar
                </Typography>
              </div>
              <Button
                variant="contained"
                color="secondary"
                onClick={() => handleLogout(setUser, router, dispatch)}
              >
                Ya la valide
              </Button>
            </Paper>
          ) : null}
        </>
      )}
      <div className={classes.contenedor}>
        <HomeCliente user={user} posts={Postss} />
      </div>
      </Layout>
    </>
  );
}
export async function getStaticProps() {
  try {
    await DBConnect();
    const res = await postModel.find().sort([['date', -1]]);
    const Postss = res.map((el) => {
      const Post = el.toObject();

      Post._id = Post._id.toString();
      Post.creator = Post.creator.toString();
      Post.cotizaciones = Post.cotizaciones.toString();
      Post.date = Post.date.toString();

      return Post;
    });
    return {
      props: { Postss,
        
      }
    };
  } catch (error) {
    console.log(error);
  }
}
