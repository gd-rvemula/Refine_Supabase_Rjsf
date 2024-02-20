import React, { useCallback, useEffect } from 'react';
import { IChangeEvent } from '@rjsf/core';
import Form from "@rjsf/antd";
import validator from '@rjsf/validator-ajv8';
import { useNotification } from '@refinedev/core';
import { useState } from "react";
import { FormEvent } from "react";
import { useNavigation } from "@refinedev/core";
import { useParams } from "react-router-dom";
import { JSON_SERVER_URL } from '../../../constants';
import { supabaseClient, normalizeFile } from "../../utility";



// This component is to access API for schema and data.

export interface supabaseRjsfPageRendererProps {

    pageName: string;

}

export const supabaseRjsfPageRenderer: React.FC<supabaseRjsfPageRendererProps> = ({ pageName }) => {

    const { id } = useParams();

    let data_url = JSON_SERVER_URL + '/' + pageName + '/' + id;
    let schemaURL = JSON_SERVER_URL + '/' + pageName + "Schema" + '/' + id;

    const [formData, setFormData] = useState({});
    const [formSchema, setFormSchema] = useState({});
    const [uiSchema, setUiSchema] = useState({});
    const { list } = useNavigation();
    const { open, close } = useNotification();

    useEffect(() => {
        (async () => {
            try {
                const response = await supabaseClient.from(pageName).select().eq('id', id);
                console.log(response)
                const responseBody = await response.data[0];
                setFormData(responseBody);
            } catch (err) {
                console.error(err);
            }
        })();
    }, []);

    useEffect(() => {
        (async () => {
            try {
                const response = await supabaseClient.from("form_schema").select().eq('form_name', pageName);
                const formSchema = response.data[0].schema;
                console.log("form schema" + JSON.stringify(formSchema));
                const uiSchema = response.data[0].ui_schema;
                console.log("UI Schema" + JSON.stringify(uiSchema));
                setFormSchema(formSchema);
                setUiSchema(uiSchema);
            } catch (err) {
                console.error(err);
            }
        })();
    }, []);


    const onFormDataSubmit = useCallback(async ({ formData }: IChangeEvent, event: FormEvent<any>) => {
        console.log('submitted formData', formData);


        const options = {
            headers: {
                'Content-Type': 'application/json',
            }
        };

        let res = await supabaseClient.from(pageName).update(formData).eq('id', id);
        console.log('patchResponse', res);

        // open notification
        open?.({
            type: "success",
            message: "Success",
            description: "User updated successfully",
        });

        // close notification
        close?.("notification-key");

        list(pageName);

    }, []);


    function cancelCourse() {
        list(pageName);
    }



    return (
        <div className="editor-page">
            <div className="page container">
                <div className="col-md-10 offset-md-1 col-xs-12">

                    <div className="form-control">
                        <Form
                            schema={formSchema}
                            uiSchema={uiSchema}
                            formData={formData}
                            validator={validator}
                            onSubmit={onFormDataSubmit}

                        >
                            <div>
                                <button type='submit'>Submit</button>
                                <button type='button' onClick={() => cancelCourse()}>Cancel</button>

                            </div>
                        </Form>
                    </div>
                </div>
            </div>
        </div>

    );
};
export default supabaseRjsfPageRenderer;
