import React from 'react'
import { useRouter } from 'next/router'
import Layout from '../../component/Layout/Layout'

const DainamicTemp = () => {
    const router = useRouter()
    // {}でKey名を変数に値を取得
    const { dainamicTemp } = router.query
    const title = dainamicTemp != null ? dainamicTemp.toString() : '';

    return (
        <>
            <Layout>
                <div>
                dainamicTemp {title}
                </div>
            </Layout>
        </>
    )
}

export default DainamicTemp