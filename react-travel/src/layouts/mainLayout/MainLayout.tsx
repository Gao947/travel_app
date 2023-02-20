import React from "react";
import { Header, Footer } from "../../components";
import styles from "./MainLayout.module.css";

export function MainLayout({ children }) {
    return (
        <>
    <Header />
    {/* 页面内容 content */}
    <div className={styles["page-content"]}>{children}</div>
    <Footer />
    </>
    );
};