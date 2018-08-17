import * as React from 'react';
import styled from 'styled-components';

const WrapperForm = styled.div`
    display: block;
`;

const WrapperInput = styled.div`
    display: block;
    width: 600px;
    padding-bottom: 2px;
`;

const Input = styled.input`
    display: block;
    width: 100%;
    font-size: 16px;
    outline: none;

    &&:focus {
        border: solid 2px #b26baa;
    }
`;

const WrapperFlex = styled.div`
    display: flex;
    width: 100%;
`;

const WrapperTextArea = styled.div`
    width: 300px;
    margin-right: 4px;
`;

const TextArea = styled.textarea`
    width: 98%;
    height: 116px;
    resize: none;
    outline: none;

    &&:focus {
        border: solid 1px #b26baa;
    }
`;

const WrapperButton = styled.div`
    width: 100px;
    margin-right: 4px;
`;

const Button = styled.button`
    width: 99px;
    height: 122px !important;
    background-color: #FFF;
    border: solid 2px #b26baa;
    font-weight: 700;
    font-size: 15px;
    color: #b26baa;
    cursor: pointer;
    outline: none;

    &&:hover {
        border: solid 3px #b26baa;
    }

    &&:active {
        background-color: #b26baa;
        color: #FFF;
    }
`;

const Form = (props): JSX.Element => {
    let ElementName: any = null;
    let ElementEmail: any = null;
    let ElementBody: any = null;
    let inlineName: object = {
        type: 'text',
        placeholder: 'Nombre',
        defaultValue: 'Rafael'
    };
    let inlineTitle: object = {
        type: 'text',
        placeholder: 'Titulo',
        defaultValue: 'TT'
    };
    let inlineMessage: object = {
        placeholder: 'Texto Aqui...',
        defaultValue: 'holaaaa........'
    };
    let getValues = () => {
        props.handlerSubmit({ ElementName, ElementEmail, ElementBody });
        ElementBody.value = '';
    }
    return (
        <WrapperForm>
            <WrapperInput>
                <Input {...inlineName} innerRef={element => ElementName = element } />
            </WrapperInput>
            <WrapperInput>
                <Input {...inlineTitle} innerRef={element => ElementEmail = element } />
            </WrapperInput>
            <WrapperFlex>
                <WrapperTextArea>
                    <TextArea {...inlineMessage} innerRef={element => ElementBody = element } ></TextArea>
                </WrapperTextArea>
                <WrapperButton>
                    <Button onClick={getValues}>Enviar</Button>
                </WrapperButton>
            </WrapperFlex>
        </WrapperForm>
    );
}



export { Form };
