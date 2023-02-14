import React from "react";
import styles from "./Header.module.css";
import logo from '../../assets/logo.svg';
import { Layout, Typography, Input, Menu, Button, Dropdown, Space } from "antd";
import { GlobalOutlined,  } from "@ant-design/icons";
import type { MenuProps } from 'antd';
import { useNavigate, useLocation, useParams, useMatch } from "react-router-dom";
import RegisterPage from "../../pages/register/RegisterPage";
import SignInPage from "../../pages/signIn/SignInPage";
import { RootState } from "../../redux/store";
import { withTranslation, WithTranslation } from "react-i18next";
// import { withRouter } from "react-router-dom";
import { 
  addLanguageActionCreator,
changeLanguageActionCreator,
 } from "../../redux/language/languageActions";
 import { connect } from "react-redux";
import { Dispatch } from "react";

const mapStateToProps = (state: RootState) => {
  return {
    language: state.language,
    languageList: state.languageList
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeLanguage: (code: "zh" | "en") => {
      const action = changeLanguageActionCreator(code);
      dispatch(action);
    },
    addLanguage: (name: string, code: string) => {
      const action = addLanguageActionCreator(name, code);
      dispatch(action);
    }
  }
}

type PropsType = {/*RouteComponentProps*/} & //react-router路由props类型
  WithTranslation & //i18n props类型
  ReturnType<typeof mapStateToProps> & // redux store 映射类型
  ReturnType<typeof mapDispatchToProps>;// redux dispatch 映射类型

class HeaderComponent extends React.Component<PropsType>{

muneClickHandler = (e) => {
  console.log(e);
  if(e.key === "new") {
    //处理新语言添加action
    this.props.addLanguage("新语言", "new_lang");
  } else {
    this.props.changeLanguage(e.key)
 }
};


  render() {
    const items: MenuProps['items'] = [
        {
          key: '1',
          label: (
            <a target="_blank" rel="noopener noreferrer">
              中文
            </a>
          ),
        },
        {
          key: '2',
          label: (
            <a target="_blank" rel="noopener noreferrer">
              English
            </a>
          )
        }
      ];
      
  const navigate = useNavigate();
  const { t } = this.props
    return (
        <div className={styles["app-header"]}>
        {/* top-header */}
        <div className={styles["top-header"]}>
          <div className={styles.inner}>
            <Typography.Text> {t("header.slogan")} </Typography.Text>
            <Dropdown 
              // menu={{ items }}
            >
              <Button
                icon={<GlobalOutlined />}
              >
                <Menu onClick={this.muneClickHandler}>
                  {this.props.languageList.map((l) => {
                    return <Menu.Item key={l.code}>{l.name}</Menu.Item>
                  })}
                  <Menu.Item key={"new"}>{t("header.add_new_language")}</Menu.Item>
                </Menu>
              </Button>
            </Dropdown>

            <Button.Group className={styles["button-group"]}>
              <Button onClick={() => navigate('/register')}>{t("header.register")}</Button>
              <Button onClick={() => navigate('/signIn')}>{t("header.signin")}</Button>
            </Button.Group>
          </div>
        </div>
        <Layout.Header className={styles["main-header"]}>
          <span onClick={() => navigate('/')}>
          <img src={logo} alt="logo" className={styles["App-logo"]} />
          <Typography.Title level={3} className={styles.title}>
          {t("header.title")}
          </Typography.Title>
          </span>
          <Input.Search
            placeholder={"请输入旅游目的地、主题、或关键字"}
            className={styles["search-input"]}
          />
        </Layout.Header>
        <Menu mode={"horizontal"} className={styles["main-menu"]}>
          <Menu.Item key="1"> {t("header.home_page")} </Menu.Item>
          <Menu.Item key="2"> {t("header.weekend")} </Menu.Item>
          <Menu.Item key="3"> {t("header.group")} </Menu.Item>
          <Menu.Item key="4"> {t("header.backpack")} </Menu.Item>
          <Menu.Item key="5"> {t("header.private")} </Menu.Item>
          <Menu.Item key="6"> {t("header.cruise")} </Menu.Item>
          <Menu.Item key="7"> {t("header.hotel")} </Menu.Item>
          <Menu.Item key="8"> {t("header.local")} </Menu.Item>
          <Menu.Item key="9"> {t("header.theme")} </Menu.Item>
          <Menu.Item key="10"> {t("header.custom")} </Menu.Item>
          <Menu.Item key="11"> {t("header.study")} </Menu.Item>
          <Menu.Item key="12"> {t("header.visa")} </Menu.Item>
          <Menu.Item key="13"> {t("header.enterprise")} </Menu.Item>
          <Menu.Item key="14"> {t("header.high_end")} </Menu.Item>
          <Menu.Item key="15"> {t("header.outdoor")} </Menu.Item>
          <Menu.Item key="16"> {t("header.insurance")} </Menu.Item>
        </Menu>
      </div>
    );
  }
}

// export const Header = connect(mapStateToProps, mapDispatchToProps)(
//   withTranslation()(withRouter(HeaderComponent))
//   );
