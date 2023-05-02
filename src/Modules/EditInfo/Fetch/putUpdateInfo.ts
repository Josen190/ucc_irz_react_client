import { url_put_users_me_update_info } from "Constatnts/url";
import fetch from "Fetch/Fetch";

async function putUpdateInfo(
  myself?: string,
  iDid?: string,
  skills?: string,
) {

  const data: { [key: string]: string } = {}
  if (myself) data.aboutMyself = myself;
  if (iDid) data.myDoings = iDid;
  if (skills) data.skills = skills;


  return await fetch.put(url_put_users_me_update_info, data)
    .then(() => {
      Promise.resolve();
    })
    .catch((error) => {
      Promise.reject(error);
    });
}

export default putUpdateInfo;