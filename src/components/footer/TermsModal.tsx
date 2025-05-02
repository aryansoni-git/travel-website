"use client";

import InfoModal from "./InfoModal";
import { TERMS_CONTENT } from "@/config/footer/terms";
import { LEGAL_DETAILS } from "@/config/footer/legal";
import { memo } from "react";

const TermsModal = () => (
    <InfoModal
        triggerText="Terms & Conditions"
        modalTitle="Terms & Conditions"
        ariaLabel="Terms and Conditions dialog"
        contentData={TERMS_CONTENT}
        legalDetails={LEGAL_DETAILS}
        metaFieldsOrder={["lastUpdated", "effectiveDate"]}
        metaLabelOverrides={{
            lastUpdated: "Last Updated",
            effectiveDate: "Effective From",
        }}
    />
);

export default memo(TermsModal);