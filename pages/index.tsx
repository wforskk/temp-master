import React from 'react'
import { Template } from '../interface/Template'
import Layout from '../component/Layout/Layout'
import { TemplateData } from '../utils/Template'
import Button from '../component/Com/Button/Button'

interface Props {
    tmplate: Template;
}
const handleRunBackEnd = (event: React.SyntheticEvent) => {

    const backEndTemp = "run from front"

    // ページリロード無効化
    event.preventDefault()
    let data = {
        backEndTemp
    }
    fetch('/api/backEndTemp', {
        method: 'POST',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }).then((res) => {
        if (res.status === 200) {
            // success func

        }
    })
}

const IndexPage = (prop: Props) => {
    return (<>
        <Layout>
            <div >
                main
            </div>
            <Button onClick={handleRunBackEnd}>バックエンド実行テンプレート</Button>
        </Layout>
    </>)
}
IndexPage.getInitialProps = async () => {
    const template: Template[] = TemplateData
    return { template }
}
export default IndexPage