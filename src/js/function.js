const DIRECTUS_FILE_API = "https://admin.capiagency.com/assets/";
export const getImgURLByIdWithSize = (id, width, height) => {
  if (id == null || id == undefined) {
    return (
      DIRECTUS_FILE_API +
      "6658e4a7-34f0-4fb0-a5fe-782f2defd819" +
      `/?width=${width}&height=${height}`
    );
  } else {
    return DIRECTUS_FILE_API + id + `/?width=${width}&height=${height}`;
  }
};

export const getImgURLById = (id) => {
  if (id == null || id == undefined) {
    return (
      DIRECTUS_FILE_API +
      "6658e4a7-34f0-4fb0-a5fe-782f2defd819"
    );
  } else {
    return DIRECTUS_FILE_API + id;
  }
};

// fetch data FAQS
export const fetchFaqsData = async () => {
  try {
    const response = await fetch("https://admin.capiagency.com/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: `
            {
                faqs {
                    question
                    answer
                }
            }
        `,
      }),
    });
    const res = await response.json();
    if (res.data && res.data.faqs) {
      return res.data.faqs;
    } else {
      console.log("No data");
      return [];
    }
  } catch (error) {
    console.log("Error fetching data:", error);
    return [];
  }
};

// fetch data Process
export const fetchProcessData = async () => {
  try {
    const response = await fetch("https://admin.capiagency.com/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: `
            {
                process {
                    title
                    description
                }
            }
        `,
      }),
    });
    const res = await response.json();
    if (res.data && res.data.process) {
      return res.data.process;
    } else {
      console.log("No data");
      return [];
    }
  } catch (error) {
    console.log("Error fetching data:", error);
    return [];
  }
};

// fetch company information data
export const fetchInformationCompanyData = async () => {
  try {
    const response = await fetch("https://admin.capiagency.com/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: `query {
            company_info {
                phones
                emails
                address
                working_hours
                portfolio
                facebook
                dribbble
                behance
            }
        }`,
    });

    const res = await response.json();
    if (res.data && res.data.company_info) {
      return res.data.company_info;
    } else {
      console.log("No data");
      return [];
    }
  } catch (error) {
    console.log("Error fetching data:", error);
    return [];
  }
};

// fetch news list
export const fetchNewsList = async () => {
  try {
    const response = await fetch("https://admin.capiagency.com/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: `
          {
           news(limit: 15, page: 1) {
                slug
                cover {
                  id
                }
                title
                blurb
            }
          }
        `,
      }),
    });
    const res = await response.json();
    if (res.data && res.data.news) {
      return res.data.news;
    } else {
      console.log("No data!");
      return [];
    }
  } catch (error) {
    console.log("Error fetching data:", error);
    return [];
  }
};

// fetch news categories
export const fetchNewsCategories = async () => {
  try {
    const response = await fetch("https://admin.capiagency.com/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: `
          {
            news_category (limit: 100) {
                title
                slug
                blurb
            }
          }
        `,
      }),
    });
    const res = await response.json();
    if (res.data && res.data.news_category) {
      return res.data.news_category;
    } else {
      console.log("No data!");
      return [];
    }
  } catch (error) {
    console.log("Error fetching data:", error);
    return [];
  }
};

// fetch news list by category (get category news)
export const fetchNewsListByCategory = async (slug) => {
  try {
    const response = await fetch("https://admin.capiagency.com/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: `
          {
            news(limit: 15, page: 1, filter: {
              categories: {
                category: {
                  slug: {
                    _eq: "${slug}"
                  }
                }
              }
            }) {
                slug
                cover {
                  id
                }
                title
                blurb
            }
          }
        `,
      }),
    });
    const res = await response.json();
    if (res.data && res.data.news) {
      return res.data.news;
    } else {
      console.log("No data!");
      return [];
    }
  } catch {
    console.log("Error fetching data!");
    return [];
  }
};

// fetch news detail
export const fetchNewDetail = async (slug) => {
  try {
    const response = await fetch("https://admin.capiagency.com/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: `
          {
            news_by_id(id: "chua-thao-do-toa-nha-o-doi-cu-da-lat-do-vuong-tranh-chap-FL")  {
                slug
                cover {
                  id
                }
                title
                blurb
                content
                categories {
                    category {
                        slug
                        title
                    }
                }
            }
          }
        `,
      }),
    });
    const res = await response.json();
    if (res.data && res.data.news_by_id) {
      return res.data.news_by_id;
    } else {
      console.log("No data!");
      return [];
    }
  } catch {
    console.log("Error fetching data!");
    return [];
  }
};
