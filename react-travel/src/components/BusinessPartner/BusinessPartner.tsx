import React from "react";
import { Row, Col, Typography, Divider } from "antd";
import styles from "./BusinessPartners.module.css";

import image1 from '../../assets/images/microsoft-80658_640.png';
import image2 from '../../assets/images/icon-720944_640.png';
import image3 from '../../assets/images/follow-826033_640.png';
import image4 from '../../assets/images/facebook-807588_640.png';

export const BusinessPartner : React.FC = (props) => {
    return (
        <div className={styles.content}>
        <Divider orientation='left'>
            {<Typography.Title level={4} type="secondary">
                合作企业
                </Typography.Title>
                }
        </Divider>
        <Row>
            <Col span={6}>
              <img src={image1} className={styles["business-image"]} alt="business-partner" />
            </Col>
            <Col span={6}>
              <img src={image2} className={styles["business-image"]} alt="business-partner" />
            </Col>
            <Col span={6}>
              <img src={image3} className={styles["business-image"]} alt="business-partner" />
            </Col>
            <Col span={6}>
              <img src={image4} className={styles["business-image"]} alt="business-partner" />
            </Col>
        </Row>
        </div>
    );
}