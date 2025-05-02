"use client";

import InfoModal from "./InfoModal";
import { PRIVACY_CONTENT } from "@/config/footer/privacy";
import { LEGAL_DETAILS } from "@/config/footer/legal";
import { memo } from "react";

const PrivacyModal = () => (
    <InfoModal
        triggerText="Privacy Policy"
        modalTitle="Privacy Policy"
        ariaLabel="Privacy Policy dialog"
        contentData={PRIVACY_CONTENT}
        legalDetails={LEGAL_DETAILS}
        metaFieldsOrder={["lastUpdated", "effectiveDate", "governingLaw"]}
        metaLabelOverrides={{
            lastUpdated: "Last Updated",
            effectiveDate: "Effective From",
            governingLaw: "Governing Law",
        }}
    />
);

export default memo(PrivacyModal);