<template>
    <div>
        <h1>IssueList</h1>
        <el-button type="success" @click="getIssues()">issue取得</el-button>
        <el-row :gutter="12">
            <!-- コード１ -->
            <el-col :span="12" v-for="( issue, index )  in issues" :key="issue.id">
                <el-card class="box-card" shadow="hover" style="margin: 5px 0;">
                <el-row :gutter="12">
                    <!-- コード2 -->
                    <el-col :span="21">{{ issue.title }}</el-col>
                    <el-col :span="3">
                    <el-button @click="closeIssue(index)" type="success" icon="el-icon-check" circle></el-button>
                    </el-col>
                </el-row>
                </el-card>
            </el-col>
            </el-row>
        </div>
</template>

<script>
    import axios from 'axios';
    // エンドポイントのベースとリクエストヘッダーをまとめてオブジェクト化して定数に代入
    const client = axios.create({  //--1
    baseURL: `${process.env.VUE_APP_GITHUB_ENDPOINT}`, //--2
    headers: { //--3
        'Accept': 'application/vnd.github.v3+json',
        'Content-Type':'application/json',
        'Authorization': `token ${process.env.VUE_APP_GITHUB_TOKEN}`
    },
    })

    export default {
        name: 'IssueList',
        data(){
            return{
                issues:[],
            }
        },

        methods: {
            getIssues(){
                // client定数からget()を呼び出し
                client.get('/issues') //--4
                .then((res) => {
                    this.issues= res.data;
                })
            },

            closeIssue(index){
                const target = this.issues[index]
                client.patch(`/issues/${target.number}`,
                {
                    state: 'closed'
                }
                )
                .then(() => {
                    this.issues.splice(index, 1) // --6
                })
            },
        },

        created() {
            this.getIssues();
        }
    }

</script>

// axios.create()でaxiosのオブジェクトを生成し、client定数に格納しています（コード1）。
// baseURLは、通信先のURLに共通の部分を設定できます（コード2）。
// headersではリクエストヘッダーを設定します（コード3）。
// リクエストを送信するときは、clientからaxiosのメソッドを使用します。baseURLが設定されているので、エンドポイントの指定はbaseURLの相対パスの指定のみでよくなります（コード4）