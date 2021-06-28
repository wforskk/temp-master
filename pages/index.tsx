import React from 'react'
import { Template } from '../interface/Template'
import Layout from '../component/Layout/Layout'
import { TemplateData } from '../utils/Template'

interface Props {
    tmplate: Template;
}

const IndexPage = (prop: Props) => {
    return (<>
        <Layout>
            <div >
                main
            </div>
        </Layout>
    </>)
}
IndexPage.getInitialProps = async () => {
    const template: Template[] = TemplateData
    return { template }
}
export default IndexPage