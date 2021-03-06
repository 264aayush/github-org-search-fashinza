import './Modal.css'
import { useState, useEffect } from 'react';

// let temp = {
//     "id": 1936771,
//     "node_id": "MDEwOlJlcG9zaXRvcnkxOTM2Nzcx",
//     "name": "truth",
//     "full_name": "google/truth",
//     "private": false,
//     "owner": {
//         "login": "google",
//         "id": 1342004,
//         "node_id": "MDEyOk9yZ2FuaXphdGlvbjEzNDIwMDQ=",
//         "avatar_url": "https://avatars.githubusercontent.com/u/1342004?v=4",
//         "gravatar_id": "",
//         "url": "https://api.github.com/users/google",
//         "html_url": "https://github.com/google",
//         "followers_url": "https://api.github.com/users/google/followers",
//         "following_url": "https://api.github.com/users/google/following{/other_user}",
//         "gists_url": "https://api.github.com/users/google/gists{/gist_id}",
//         "starred_url": "https://api.github.com/users/google/starred{/owner}{/repo}",
//         "subscriptions_url": "https://api.github.com/users/google/subscriptions",
//         "organizations_url": "https://api.github.com/users/google/orgs",
//         "repos_url": "https://api.github.com/users/google/repos",
//         "events_url": "https://api.github.com/users/google/events{/privacy}",
//         "received_events_url": "https://api.github.com/users/google/received_events",
//         "type": "Organization",
//         "site_admin": false
//     },
//     "html_url": "https://github.com/google/truth",
//     "description": "Fluent assertions for Java and Android",
//     "fork": false,
//     "url": "https://api.github.com/repos/google/truth",
//     "forks_url": "https://api.github.com/repos/google/truth/forks",
//     "keys_url": "https://api.github.com/repos/google/truth/keys{/key_id}",
//     "collaborators_url": "https://api.github.com/repos/google/truth/collaborators{/collaborator}",
//     "teams_url": "https://api.github.com/repos/google/truth/teams",
//     "hooks_url": "https://api.github.com/repos/google/truth/hooks",
//     "issue_events_url": "https://api.github.com/repos/google/truth/issues/events{/number}",
//     "events_url": "https://api.github.com/repos/google/truth/events",
//     "assignees_url": "https://api.github.com/repos/google/truth/assignees{/user}",
//     "branches_url": "https://api.github.com/repos/google/truth/branches{/branch}",
//     "tags_url": "https://api.github.com/repos/google/truth/tags",
//     "blobs_url": "https://api.github.com/repos/google/truth/git/blobs{/sha}",
//     "git_tags_url": "https://api.github.com/repos/google/truth/git/tags{/sha}",
//     "git_refs_url": "https://api.github.com/repos/google/truth/git/refs{/sha}",
//     "trees_url": "https://api.github.com/repos/google/truth/git/trees{/sha}",
//     "statuses_url": "https://api.github.com/repos/google/truth/statuses/{sha}",
//     "languages_url": "https://api.github.com/repos/google/truth/languages",
//     "stargazers_url": "https://api.github.com/repos/google/truth/stargazers",
//     "contributors_url": "https://api.github.com/repos/google/truth/contributors",
//     "subscribers_url": "https://api.github.com/repos/google/truth/subscribers",
//     "subscription_url": "https://api.github.com/repos/google/truth/subscription",
//     "commits_url": "https://api.github.com/repos/google/truth/commits{/sha}",
//     "git_commits_url": "https://api.github.com/repos/google/truth/git/commits{/sha}",
//     "comments_url": "https://api.github.com/repos/google/truth/comments{/number}",
//     "issue_comment_url": "https://api.github.com/repos/google/truth/issues/comments{/number}",
//     "contents_url": "https://api.github.com/repos/google/truth/contents/{+path}",
//     "compare_url": "https://api.github.com/repos/google/truth/compare/{base}...{head}",
//     "merges_url": "https://api.github.com/repos/google/truth/merges",
//     "archive_url": "https://api.github.com/repos/google/truth/{archive_format}{/ref}",
//     "downloads_url": "https://api.github.com/repos/google/truth/downloads",
//     "issues_url": "https://api.github.com/repos/google/truth/issues{/number}",
//     "pulls_url": "https://api.github.com/repos/google/truth/pulls{/number}",
//     "milestones_url": "https://api.github.com/repos/google/truth/milestones{/number}",
//     "notifications_url": "https://api.github.com/repos/google/truth/notifications{?since,all,participating}",
//     "labels_url": "https://api.github.com/repos/google/truth/labels{/name}",
//     "releases_url": "https://api.github.com/repos/google/truth/releases{/id}",
//     "deployments_url": "https://api.github.com/repos/google/truth/deployments",
//     "created_at": "2011-06-22T18:55:12Z",
//     "updated_at": "2022-02-05T15:50:19Z",
//     "pushed_at": "2022-02-05T00:54:15Z",
//     "git_url": "git://github.com/google/truth.git",
//     "ssh_url": "git@github.com:google/truth.git",
//     "clone_url": "https://github.com/google/truth.git",
//     "svn_url": "https://github.com/google/truth",
//     "homepage": "https://truth.dev/",
//     "size": 33318,
//     "stargazers_count": 2386,
//     "watchers_count": 2386,
//     "language": "Java",
//     "has_issues": true,
//     "has_projects": true,
//     "has_downloads": true,
//     "has_wiki": true,
//     "has_pages": true,
//     "forks_count": 246,
//     "mirror_url": null,
//     "archived": false,
//     "disabled": false,
//     "open_issues_count": 77,
//     "license": {
//         "key": "apache-2.0",
//         "name": "Apache License 2.0",
//         "spdx_id": "Apache-2.0",
//         "url": "https://api.github.com/licenses/apache-2.0",
//         "node_id": "MDc6TGljZW5zZTI="
//     },
//     "allow_forking": true,
//     "is_template": false,
//     "topics": [
//         "assertion-framework",
//         "java",
//         "junit",
//         "test-framework",
//         "testing-library",
//         "truth",
//         "unit-testing"
//     ],
//     "visibility": "public",
//     "forks": 246,
//     "open_issues": 77,
//     "watchers": 2386,
//     "default_branch": "master",
//     "permissions": {
//         "admin": false,
//         "maintain": false,
//         "push": false,
//         "triage": false,
//         "pull": true
//     }
// }

let Modal = (props) => {
    let [visible, setVisible] = useState(true)
    let [repoData, setRepoData] = useState({
        'permissions': "dd",
        'license': "dd",
        'owner': "dd"
    })

    useEffect(() => {
        if (props.repo != null && JSON.stringify(props.repo) !== JSON.stringify({})) {
            setVisible(true)
            console.log(props.repo)
            let data = {}
            data.owner = props.repo.owner.login.toUpperCase();
            if (props.repo.license != null)
                data.license = props.repo.license.name
            else data.license = "No License"
            
            data.permissions = `
            ${props.repo.permissions.admin ? 'Admin' : ""}
            ${props.repo.permissions.maintain ? 'Maintain' : ""}
            ${props.repo.permissions.push ? 'Push' : ""}
            ${props.repo.permissions.triage ? 'Triage' : ""}
            ${props.repo.permissions.pull ? 'Pull' : ""}
            `
            setRepoData(data);
        }
    }, [props.repo])
    if (props.repo == null || JSON.stringify(props.repo) === JSON.stringify({}))
        return <div></div>
    return <div id="myModal" class="modal" style={{ display: visible ? 'block' : 'none' }} onClick={(e) => {
        if (e.target.id === 'myModal')
            setVisible(false)
    }}>
        <div className="modal-content">
            <span className="close" onClick={() => { setVisible(false) }}>&times;</span>
            <p>
                <span> <strong>Permissions:</strong> {repoData.permissions} </span>
                <br></br>
                <span> <strong>License:</strong> {repoData.license} </span>
                <br></br>
                <span> <strong>Owner:</strong> {repoData.owner} </span>
                <br></br>
            </p>
        </div>

    </div>
}

export default Modal;