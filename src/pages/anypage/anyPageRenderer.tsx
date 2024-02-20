import React, { useCallback, useEffect } from 'react';
import { IChangeEvent } from '@rjsf/core';
import Form from "@rjsf/antd";
import validator from '@rjsf/validator-ajv8';
import axios from "axios";
import { useNotification } from '@refinedev/core';
import { useState } from "react";
import { FormEvent } from "react";
import { useNavigation } from "@refinedev/core";
import { useParams } from "react-router-dom";
import { JSON_SERVER_URL } from '../../../constants';



// This component is to access API for schema and data.

export interface anyPageRendererProps {

    pageName: string;

}

export const anyPageRenderer: React.FC<anyPageRendererProps> = ({ pageName }) => {

    const { id } = useParams();

    let data_url = JSON_SERVER_URL + '/' + pageName + '/' + id;
    let schemaURL = JSON_SERVER_URL + '/' + pageName + "Schema" + '/' + 1;

    
    const uiSchema = {}


    const [formData, setFormData] = useState({});
    const [formSchema, setFormSchema] = useState({});
    const { list } = useNavigation();
    const { open, close } = useNotification();

    useEffect(() => {
        (async () => {
            try {
                const response = await fetch(data_url);
                const responseBody = await response.json();
                setFormData(responseBody);
                console.log('anypagerender-formData', responseBody);
            } catch (err) {
                console.error(err);
            }
        })();
    }, []);

    useEffect(() => {
        (async () => {
            try {

                const schema = await fetch(schemaURL);
                const schemaBody = await schema.json();
                //id value in RJSF schema is not allowed
                delete schemaBody.id;
                setFormSchema(schemaBody);
            } catch (err) {
                console.error(err);
            }
        })();
    }, []);


    const onFormDataSubmit = useCallback(({ formData }: IChangeEvent, event: FormEvent<any>) => {
        console.log('submitted formData', formData);

        
        const options = {
            headers: {
                'Content-Type': 'application/json',
            }
        };

        let res = axios.patch(data_url, formData, options);
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
export default anyPageRenderer;
