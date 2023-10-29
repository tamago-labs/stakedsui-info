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
            data: undefined
        }
    )

    const { data, panel } = values

    const showValidatorPanel = (data) => {
        dispatch({
            panel: PANEL.VALIDATOR,
            data
        })
    }

    const closePanel = () => {
        dispatch({
            panel: PANEL.NONE
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
                data={data}
            />
            {children}
        </PanelContext.Provider>
    )

}

export default Provider