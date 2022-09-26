/* Import React modules */
import React, { useEffect, useState } from "react";
/* Import other node modules */
import ContentstackAppSdk from "@contentstack/app-sdk";
import { Button, FieldLabel, Select, TextInput, ToggleSwitch } from "@contentstack/venus-components";
import { TypeSDKData } from "../../common/types";
/* Import our modules */
/* Import node module CSS */
/* Import our CSS */
import "./styles.scss";
import { useFormik } from "formik";


const conditions = [
  {
    value: "add",
    label: "Add",
    id: "add"
  },
  {
    value: "update",
    label: "Update",
    id: "update"
  },
  {
    value: "delete",
    label: "Delete",
    id: "delete"
  }
];
const DashboardWidget: React.FC = function () {
  const [state, setState] = useState<any>({
    config: {},
    location: {},
    appSdkInitialized: false,
    contenttypes: undefined
  });

  useEffect(() => {
    ContentstackAppSdk.init().then(async (appSdk) => {
      const config = await appSdk.getConfig();
      // appSdk?.location?.DashboardWidget?.frame?.enableAutoResizing?.();
      const contenttypes = await fetchContentTypes();
      setState({
        config,
        location: appSdk.location,
        appSdkInitialized: true,
        contenttypes: contenttypes
      });
      console.log(getOption(contenttypes.content_types))
    });
  }, []);

  const formik = useFormik({
    initialValues: { data: [] },
    onSubmit: (value) => {
      console.log(value)
    }
  })
  console.log(formik.values)
  return (
    <div className="layout-container">
      {state.appSdkInitialized && (
        <>
          <div style={{ width: '200px', paddingLeft: '20px', paddingBottom: '20px' }}>
            <Button type="button" size="large" onClick={() => formik.setFieldValue('data', [...formik.values.data, {
              name: "",
              stackApiKey: "",
              enabled: false,
              pathApplicable: [
                {
                  contentType: "",
                  operation: "",
                  fields: {
                      currentField: "",
                      newField: ""
                  }
              }
              ]
            }]
            )}>+ Feature Toggle</Button>
          </div>
          {formik.values?.data.map((el, i) => (
            <div style={{ border: '4px solid #6c5ce7', padding: '10px', margin: '10px', borderRadius: '10px' }}>
              <div style={{ display: 'flex', paddingRight: '50px', alignItems: "flex-start" }}>
                <div>
                  <FieldLabel required={true} htmlFor="">Toggle Key</FieldLabel>
                  <TextInput value={(formik.values.data[i] as any).name} onChange={formik.handleChange} name={`data.${i}.name`} />
                </div>
                <ToggleSwitch
                  label="Status"
                  labelPosition={"left"}
                  onClick={() => formik.setFieldValue(`data[${i}].enabled`, !(formik.values.data[i] as any).enabled)}
                  checked={(formik.values.data[i] as any).enabled}
                />
              </div>

              {(formik.values.data[i] as any)?.pathApplicable.map((el: any, j: any) => (<div style={{ display: 'flex', paddingTop: '10px' }}>
                <Select
                  selectLabel={"ContentType"}
                  value={(formik.values.data[i] as any).pathApplicable[j].contentType}
                  onChange={(val: any) => formik.setFieldValue(`data[${i}].enabled.pathApplicable[${j}].contentType`, val)}
                  options={getOption(state.contenttypes.content_types)}
                />
                -
                <Select
                  selectLabel={"Condition"}
                  value={undefined}
                  onChange={(val: any) => formik.setFieldValue(`data[${i}].enabled.pathApplicable[${j}].contentType`, val)}
                  options={conditions}
                /> -
                <Select
                  selectLabel={"ContentType"}
                  value={undefined}
                  onChange={(val: any) => console.log(val)}
                  options={getOption(state.contenttypes.content_types)}
                />
              </div>))}
            </div>))}
        </>
      )}
    </div>
  );
};



const fetchContentTypes = async () => {
  const response = await fetch('https://api.contentstack.io/v3/content_types', {
    headers: {
      api_key: "blt24dcf2e98f671ca5",
      authorization: "csfa4b66976f8fc80c114c87cb"
    }
  })
  const data = await response.text()
  return JSON.parse(data)
}

const getOption = (contentTypes: any) => {
  return contentTypes.map((el: any) => ({
    value: el.uid,
    label: el.title,
    id: el.uid
  }))
}

export default DashboardWidget;
