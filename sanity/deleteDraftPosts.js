import { getCliClient } from 'sanity/cli'

const client = getCliClient()

async function deleteDraftPosts() {
    const query = '*[_type == "post" && _id in path("drafts.**")]._id'
    const draftIds = await client.fetch(query)

    if (draftIds.length === 0) {
        console.log('No draft posts found.')
        return
    }

    console.log(`Found ${draftIds.length} draft posts. Deleting...`)
    const transaction = client.transaction()
    draftIds.forEach((id) => transaction.delete(id))

    await transaction.commit()
    console.log('All draft posts deleted successfully!')
}

deleteDraftPosts()