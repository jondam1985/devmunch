const getData = require('../main');
const axios = require('axios');

jest.mock('axios');

it('Should Return User ID of stackoverflow user', async () => {
  axios.get.mockResolvedValue({
    data: [
      {
        "badge_counts": {
            "bronze": 8715,
            "silver": 8385,
            "gold": 744
        },
        "account_id": 11683,
        "is_employee": false,
        "last_modified_date": 1584564003,
        "last_access_date": 1584649366,
        "reputation_change_year": 16453,
        "reputation_change_quarter": 16453,
        "reputation_change_month": 3970,
        "reputation_change_week": 1015,
        "reputation_change_day": 260,
        "reputation": 1170675,
        "creation_date": 1222430705,
        "user_type": "registered",
        "user_id": 22656,
        "accept_rate": 86,
        "location": "Reading, United Kingdom",
        "website_url": "http://csharpindepth.com",
        "link": "https://stackoverflow.com/users/22656/jon-skeet",
        "profile_image": "https://www.gravatar.com/avatar/6d8ebb117e8d83d74ea95fbdd0f87e13?s=128&d=identicon&r=PG",
        "display_name": "Jon Skeet"
    },
    {
        "badge_counts": {
            "bronze": 3738,
            "silver": 3175,
            "gold": 372
        },
        "account_id": 4243,
        "is_employee": false,
        "last_modified_date": 1583503524,
        "last_access_date": 1584649301,
        "reputation_change_year": 19418,
        "reputation_change_quarter": 19418,
        "reputation_change_month": 4742,
        "reputation_change_week": 1397,
        "reputation_change_day": 490,
        "reputation": 937957,
        "creation_date": 1221344553,
        "user_type": "registered",
        "user_id": 6309,
        "accept_rate": 100,
        "location": "France",
        "website_url": "http://careers.stackoverflow.com/vonc",
        "link": "https://stackoverflow.com/users/6309/vonc",
        "profile_image": "https://www.gravatar.com/avatar/7aa22372b695ed2b26052c340f9097eb?s=128&d=identicon&r=PG",
        "display_name": "VonC"
    },
    {
        "badge_counts": {
            "bronze": 505,
            "silver": 396,
            "gold": 40
        },
        "account_id": 1165580,
        "is_employee": false,
        "last_modified_date": 1584604511,
        "last_access_date": 1584649815,
        "reputation_change_year": 32681,
        "reputation_change_quarter": 32681,
        "reputation_change_month": 8100,
        "reputation_change_week": 2182,
        "reputation_change_day": 442,
        "reputation": 930359,
        "creation_date": 1326311637,
        "user_type": "registered",
        "user_id": 1144035,
        "location": "New York, United States",
        "website_url": "http://www.data-miners.com",
        "link": "https://stackoverflow.com/users/1144035/gordon-linoff",
        "profile_image": "https://www.gravatar.com/avatar/e514b017977ebf742a418cac697d8996?s=128&d=identicon&r=PG",
        "display_name": "Gordon Linoff"
    },
 
    ]
  });

  const stack_id = await getData();
  expect(stack_id).toEqual(22656);
});
