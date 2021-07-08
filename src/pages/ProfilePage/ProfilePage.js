import { Button, Typography } from "@material-ui/core";
import React, { useEffect, useContext } from "react";
import Header from "../../components/Header/Header";
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";
import {
  ContainerAdress,
  ContainerButton,
  ContainerDetail,
  ContainerOrderHistory,
  ContainerTitleOrder,
  LogoutButton
} from "./style";
import OrderHistoryCard from "../../components/OrderHistoryCard/OrderHistoryCard";
import Footer from "../../components/Footer/Footer";
import { useHistory } from "react-router-dom";
import {
  goToEditAddressPage,
  goToLogin,
  goToProfileEditPage,
} from "../../routes/coordinator";
import useProtectedPage from "../../hooks/useProtectedPage";
import { getOrdersHistory } from "../../services/order";
import { GlobalStateContext } from "../../global/GlobalStateContext";
import { getProfile } from "../../services/profile";
import { Loading } from "react-loading-dot/lib";
import { getFullAddress, logout } from "../../services/user";
import GoToTop from "../../components/GoToTop/GoToTop";

const ProfilePage = () => {
  useProtectedPage();
  const history = useHistory();
  const { states, setters } = useContext(GlobalStateContext);
  const profile = states.profile;
  const address = states.address;

  const onClickLogout = () => {
    localStorage.removeItem("token")
    goToLogin(history)
  }

  useEffect(() => {
    getOrdersHistory(setters.setOrdersHistory, setters.setLoading);
    getProfile(setters.setProfile, setters.setLoading);
    getFullAddress(setters.setAddress, setters.setLoading)
    setters.setCart([])
  }, []);

  return (
    <div>
      <Header title={"Meu Perfil"} buttonLeft={() => logout(history)} icon={'exit'} />
      {states.loading && states.address ? (
        <Loading />
      ) : (
        <div>
          <ContainerDetail>
            <div>
              <Typography variant={"body1"}>{profile.name}</Typography>
              <Typography variant={"body1"}>{profile.email}</Typography>
              <Typography variant={"body1"}>{profile.cpf}</Typography>
            </div>
            <ContainerButton onClick={() => goToProfileEditPage(history)}>
              <EditOutlinedIcon />
            </ContainerButton>
          </ContainerDetail>
          <ContainerAdress>
            <div>
              <Typography variant={"body1"} color={"secondary"}>
                Endereço de Entrega
              </Typography>
              <Typography variant={"body1"}>{address.street}, {address.number}, {address.complement} - {address.neighbourhood}</Typography>
            </div>
            <Button onClick={() => goToEditAddressPage(history)}>
              <EditOutlinedIcon />
            </Button>
          </ContainerAdress>
          <ContainerOrderHistory>
            <ContainerTitleOrder>
              <Typography variant={"body1"}>Histórico de Pedidos</Typography>
            </ContainerTitleOrder>
            <OrderHistoryCard />
          </ContainerOrderHistory>
        </div>
      )}
      <Footer history={history} colorProfile={"primary"} />
      <GoToTop />
    </div>
  );
};

export default ProfilePage;
