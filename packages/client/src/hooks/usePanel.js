import ValidatorDetails from "@/panels/ValidatorDetails"
import { createContext, useCallback, useContext, useEffect, useMemo, useReducer, useState } from "react"

export const PanelContext = createContext()

const PANEL = {
    NONE: "NONE",
    VALIDATOR: "VALIDATOR",
    MINT: "MINT"
}

const Provider = ({ children }) => {

    const [values, dispatch] = useReducer(
        (curVal, newVal) => ({ ...curVal, ...newVal }),
        {
            panel: PANEL.NONE,
            slug: undefined
        }
    )

    const { slug, panel } = values

    const showValidatorPanel = (slug) => {
        dispatch({
            panel: PANEL.VALIDATOR,
            slug
        })
    }

    const closePanel = () => {
        dispatch({
            panel: PANEL.NONE,
            slug: undefined
        })
    }

    const panelContext = useMemo(
        () => ({
            showValidatorPanel
        }),
        [
        ]
    )

    return (
        <PanelContext.Provider value={panelContext}>
            <ValidatorDetails
                visible={panel === PANEL.VALIDATOR}
                close={closePanel}
                slug={slug}
            />
            {children}
        </PanelContext.Provider>
    )

}

export default Provider