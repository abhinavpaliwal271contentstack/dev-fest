/* Import React modules */
import React, { useState, useEffect } from "react";
/* Import other node modules */
import {
  FieldLabel,
  TextInput,
  ToggleSwitch,
  Button,
  Select,
  Tooltip,
  Icon
} from "@contentstack/venus-components";
import ContentstackAppSdk from "@contentstack/app-sdk";
/* Import our modules */
import localeTexts from "../../common/locale/en-us";
import utils from "../../common/utils";
// import { getDataFromAPI } from '../../services'; //If no services are required, this can be removed\
/* Import node module CSS */
import "@contentstack/venus-components/build/main.css";
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

/* eslint-disable */
const ConfigScreen: React.FC = function () {
  const [state, setState] = useState<any>({
    installationData: {
      configuration: {
        /* Add all your config fields here */
        /* The key defined here should match with the name attribute
        given in the DOM that is being returned at last in this component */
        configField1: "",
      },
      serverConfiguration: {},
    },
    setInstallationData: (): any => { },
    appSdkInitialized: false,
  });

  useEffect(() => {
    ContentstackAppSdk.init().then(async (appSdk) => {
      const sdkConfigData = appSdk?.location?.AppConfigWidget?.installation;
      if (sdkConfigData) {
        const installationDataFromSDK =
          await sdkConfigData.getInstallationData();
        const setInstallationDataOfSDK = sdkConfigData.setInstallationData;
        const contenttypes = await fetchContentTypes();
        setState({
          ...state,
          installationData: utils.mergeObjects(
            state.installationData,
            installationDataFromSDK
          ),
          setInstallationData: setInstallationDataOfSDK,
          appSdkInitialized: true,
          contenttypes: contenttypes
        });
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /** updateConfig - Function where you should update the state variable
   * Call this function whenever any field value is changed in the DOM
   * */
  const updateConfig = async (e: any) => {
    // eslint-disable-next-line prefer-const
    let { name: fieldName, value: fieldValue } = e.target;
    const updatedConfig = state?.installationData?.configuration || {};
    updatedConfig[fieldName] = fieldValue;

    const updatedServerConfig = state.installationData.serverConfiguration;
    updatedServerConfig[fieldName] = fieldValue;

    if (typeof state.setInstallationData !== "undefined") {
      await state.setInstallationData({
        ...state.installationData,
        configuration: updatedConfig,
        serverConfiguration: updatedServerConfig,
      });
    }

    return true;
  };

  const formik = useFormik({
    initialValues: {
      data: [{
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
    },
    onSubmit: (value) => {
      console.log(value)
    }
  })

  if (!state?.contenttypes?.content_types?.length) {
    return <></>
  }
  return (
    <div className="layout-container">
      <div className="page-wrapper">
        <div className="config-wrapper">
          <>
            <div style={{ width: '200px' }}>
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
            {formik.values?.data.map((toggle, i) => {
              return (
                <div style={{ border: '2px solid #647696', padding: '10px', margin: '10px', borderRadius: '10px', width: '760px' }}>
                  <div style={{ display: 'flex', paddingRight: '50px', alignItems: "flex-start" }}>
                    <div>
                      <FieldLabel required={true} htmlFor="">Toggle Key</FieldLabel>
                      <TextInput value={toggle.name} onChange={formik.handleChange} name={`data.${i}.name`} width="medium" />
                    </div>
                    <div style={{ marginTop: '5px', marginLeft: '500px' }}>
                      <ToggleSwitch
                        onClick={() => formik.setFieldValue(`data[${i}].enabled`, !toggle.enabled)}
                        checked={toggle.enabled}
                      />
                    </div>
                  </div>

                  {toggle?.pathApplicable.map((applicablePath: any, j) => {
                    console.log(applicablePath)
                    return (<div style={{ display: 'flex', paddingTop: '10px' }}>
                      <Select
                        selectLabel={"ContentType"}
                        value={getOption(state.contenttypes.content_types)?.find((el: any) => el.value === applicablePath.contentType)}
                        onChange={(val: any) => formik.setFieldValue(`data[${i}].pathApplicable[${j}].contentType`, val.value)}
                        options={getOption(state.contenttypes.content_types)}
                        width="180px"
                      />
                      {!!applicablePath.contentType && <div className="ml-20">
                        <Select
                          selectLabel={"Condition"}
                          value={conditions.find(el => (el.value === applicablePath.condition))}
                          onChange={(val: any) => formik.setFieldValue(`data[${i}].pathApplicable[${j}].condition`, val.value)}
                          options={conditions}
                          width="180px"

                        /></div>}
                      {!!applicablePath.condition && <RenderOption parentState={state} applicablePath={applicablePath} path={`data[${i}].pathApplicable[${j}].`} formik={formik} />}
                    </div>)
                  })}
                  <Button className="mt-10 mr-10" onClick={() => {
                    formik.setFieldValue(`data[${i}].pathApplicable`, [
                      ...toggle?.pathApplicable,
                      {
                        contentType: "",
                        operation: "",
                        fields: {
                          currentField: "",
                          newField: ""
                        }
                      }
                    ])
                  }}>
                    Add new Entry
                  </Button>
                </div>)
            })}
          </>
        </div>
      </div>
    </div>
  );
};


const RenderOption = ({ parentState, applicablePath, formik, path }: { parentState: any, applicablePath: any, formik: any, path: any }) => {
  console.log(parentState.contenttypes.content_types, parentState.contentType)
  if ((applicablePath.condition === "add") || (applicablePath.condition === "delete")) {
    return (<div className="ml-20">
      <Select
        selectLabel={"New Field"}
        value={undefined}
        onChange={(val: any) => formik.setFieldValue(path + "newField", val.value)}
        options={getFieldOptions(parentState.contenttypes.content_types, applicablePath.contentType)}
        width="180px"
      />
    </div>)
  }
  return (
    <>
      <div className="ml-20">
        <Select
          selectLabel={"Current Field"}
          value={undefined}
          onChange={(val: any) => formik.setFieldValue(path + "currentField", val.value)}
          options={getFieldOptions(parentState.contenttypes.content_types, applicablePath.contentType)}
          width="180px"
        />
      </div>
      <div className="ml-20">
        <Select
          selectLabel={"New Field"}
          value={undefined}
          onChange={(val: any) => formik.setFieldValue(path + "newField", val.value)}
          options={getFieldOptions(parentState.contenttypes.content_types, applicablePath.contentType)}
          width="180px"
        />
      </div>
    </>)
}

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


const getFieldOptions = (contentTypes: any, uid: string) => {

  const selectType = contentTypes.find((el: any) => el.uid === uid)?.schema;
  return selectType?.map((el: any) => ({
    value: el.uid,
    label: el.display_name,
    id: el.uid
  }))
}
const getOption = (contentTypes: any) => {
  return contentTypes.map((el: any) => ({
    value: el.uid,
    label: el.title,
    id: el.uid
  }))
}


export default ConfigScreen;
