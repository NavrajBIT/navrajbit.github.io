import React, { useContext, useState } from "react";
import "./Profile.css";
import { useNavigate } from "react-router-dom";
import KhelVideo from "../Video/KhelVideo";

export const Talent = () => {
  const [isEditting, setIsEditting] = useState(false);
  const navigate = useNavigate();

  const videosData = [
    {
      name: "Surender Singh",
      image:
        "data:image/jpeg;base64,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",
      sport: "Cricket",
      src: "https://www.youtube.com/embed/-YMo78jTbJw",
      title: "Surender playing Cricket",
    },
    {
      name: "Virender Singh",
      image:
        "data:image/jpeg;base64,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",
      sport: "VolleyBall",
      src: "https://www.youtube.com/embed/dC7CD-Wrolg",
      title: "Virender playing VolleyBall",
    },
    {
      name: "Mahender Singh",
      image:
        "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEhUSExIVFRUXFxUZFRYVFRUVFRUYFRUXFhcXFRUYHSggGBolGxUVIjEiJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGhAQGi0lHx0tLSsrLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKystLS0tLS0tLS0tLf/AABEIARMAtwMBIgACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAAAAQIEAwUGBwj/xAA6EAACAQIDBQYEBQMDBQAAAAAAAQIDEQQhMQUSQVFhInGBkbHwBjKhwRMjQlLRcuHxBxQzFTRikrL/xAAZAQEBAQEBAQAAAAAAAAAAAAAAAQIDBAX/xAAjEQEBAAICAgICAwEAAAAAAAAAAQIRAyESMTJBBFEUImET/9oADAMBAAIRAxEAPwD10AA+a9oE2MhLMsiJ3ASGRQBiq4iEU3KSSiru7WXf9DksX/qLhqcrfh1JK7V1uee7vXsWS1LZHZAcfQ/1EwkldqpF8nG/1X3LmE+OMFPWo4PlOLX1V19S+NTyjpAKuF2jRqJShVhJPRqS4alm5GjAjmNMBgAEAAAAAAAAAAAAn0Auk2YgIuXHgA2wsCRIuwGi258TUaCklOMqiy3dVF2v2raaoj8abWlhsPvQ+aTUU/2p/NJdbadWeR7Z2hKVr7qaVlJXTa1vlrqaww2xnnpDa+0J1JuUmpOTbets+tzWyqZ/3ZDVkZLnfvR6JHDbLGfejLGPXz4leU2lz96PmShWSy/S8106rueXtFVYWXHLi+K7+aOo2B8UV8PKEE1KD3d5SV27vN36O68Dj3Xtp48mZvxd5RccpQWn7orOy665EslN6e/bK2jCvBTjk8rrl3++KLjPJ/gHbv4crzk3H5Yxbyd036+9D1PC19+Klz/w153OGc1XbG7ZgADk6AAAAAAACLYN8hIsQ0A0gLs0ZFRGMikADIND8aYeM8NNyt2VfPyt0ueI143duHS9vqe2/Hn/AGFfuj/9xPMtjbEjUhvz46L3xOuOcxx3XPLC5Zajm40mTlRb1T98v7noGB2PSXAvR2bD9qOd/Kn6dp+HbPbzSngZtZJ+TM8NhVWvlflzPTIYSK4IKuDXEz/Jv6b/AIc/bzSGw5fqaVut300MVbBQg/mldclY9Cq7Oic5t/ZVldeJcOfyunPP8fxm3OUMdKnUjUTu4vK9mk+7S56b/pv8QupGVKpLenFtxd1dqTu8r55s8qrUWi98L4iUMVRcZNP8SCy5OSTVuJ6bJlHml1X0KAAed6AAAQAAAEZRGMCgEMRAxAMAAQwNH8bxvga/9KflOL+xxezaDhTjF629T0jH0FUpzg/1RkvNHne1dpUqU+083wWbS5sznuzUa49S7rYYYuQ1NPgduYd/rXc7o3lOcZK6a8DhcbPb245Szqk5WMU5MK+KpU/mkr/U19X4iw2iqJ+Y8Mr6i3PGe6tTZpNu0pSjkX4bVoz0mk+Ty+pmvfK2Qm8b6Yy1nOq8/wAbRyM/wZgHVx1CK4TUnwyh2nn4fU2e3sKoyyyTNn/pZg74mpUt8lO3jKS+yZ7sMv67fOzx1lp6iAAc3QAAAAABAAAAAhiABiGAhiGApLJnlu16zg3KNNSk3ra+XU9TOFrUFKUl1fqYyunTjm9uRqqUqii6dNt7vaj8q3tbytlbO9zdbCrPe3OCvp9i3PBJGTZdCzcjOWcsd8OO45e1Ta1JOTdrv1NNWjOkozhCm275bilJWStdcL58XodViKacrjhgYkwzk9rnx2+nP4fF1JNKpQjoneKyV+GfFG6o0WkXY4OKCUUkYzu/TWOOp25n4gw7nUpwWrv5XNns7A/gQcYyd5NObTaTfDJd5DGR/Nh3S9C9Ti0rSd95X4XTSv5GrlfGRnjwx8rlXYbOm5UoNu73Vd87ZFkp7IT/AAYX1tfzbZcO09PLn8roAAGmQAAAAAEAIYgAABgACYFRI4evlUl/U/U7c4LaNZKtUWm7KXlc58k6duG6yZMRUSWehl2VjKbi7cOeXjmcrjPiBtuFODb5lfZzxObds09Wtf4JOK67drzS3U7dW8TTm7xb3uF4ySduV1mjY0mn0OGhj8TSlnZ36355dxsNn/E93u1I7rva5Lx2elnNj6vTqq0inVmSq1Fa7NZisXbQ5e66ZWSMOIquVVJcE/r6mx2ZUVarGnGW85Ru3ZrsrW3Cxr/h7COtXu7paJ83fTPxO52VsqFFuSScpcVpbkuX3O8w/by/9bPTZQjZJLRZLwGAG3EAAAAAACABMokIVgCGAA0FSjJIjbw6AmO5dskjz74zwjhiG18tSN/G1n76noJrtubKjiae63aSu4S5P+GRqXTz2ns+nubzjvO3HMwLaEY5f7e9uVvujJh8TKhJ0a0XGSdrP1XQuvHRvFWWbt/k59y9vRjZZuXTDgq0Kyt+DZcb287cSzith0mrqKTXFZF2NeEVfJZXsupqNobci01F25de8z3b03fGT+yxjMS0kvBmpxOMWb4JZ21fLuXUqYja6cbe8jDRg51FJNOGqdrXXFNcUdMOPU3Xn5OXd1i634Zk6co3/VNLPkrRt3LPM9CPMMPd2zsuf8G7/wCp1uNSXDjY6TG3tztk6dqBW2dXc6cZPVrPvWRZMqAACAABADHBiFoWJU3m8gFcRdxOwAAZaAAADAQyjR/E3w1TxkVd7lSPyVFw6NcUeZba2ZicNPclaW7o1xXPuPaDjfjqVOUopNOcV2ktUnpf6l8tRJjuvN8RjcRNWtZFalgass72Oi/DT4FijStorvnwXiJnb1jG8uOe8q02F2IlZzb1y5vuRvaGHWWVllZLp6lilRSzeb5mehTbaaV87Jab0tbJ8EtW+C5uyO+OGu8nDLKesRSgkt6Voxvq9L8lxk+iTZdwVF1Pkpu376t4J/0wjnbq2u4vYTZyi05WlUtnK1lFftpr9Mfrxd2XU81bTQzlkTFe2InGmoS3U03lFtq3ezYmopytoXqGJvk/M410iwAARQMAKEAAQMQxAAAAAAAAAAwNLt3a7h+VSzqvV8ILr1OHxtDc1blOWr1d7m5rVnuzf6o1Zxm3q25uzv4oyYrBWWUW3a7ll5HWSa0xu725+lhHxLcIpLJe/fvUc8svfv0MdKakt66UEruT0ir+bb4LV5dDrjjMZ0xllcr2zwhe7llFW0V3duyUecm8ku9m8weH3FvSSUmrJLNQjwgnx5t8X4JUdl4Zyaqyi4xjf8KD1V8nUn/5tZW/SsuZs5SuzGeS4xOL4c9TLGGRGlAz2OdbQUiamFiLh4kFzD4i2WqLqZqIl7CVb5eRFWhDERQAAAxDEAAAAAAAAAGLF11CLl5d5Rqtu4ai4uO7FTk08kk21xb55LPoa3Db+5HfTbaV++2d0Oe9N7zecmvBJ+/IsVJZ+FzcZabGYRpdlZvy8THs7ZMrxdVpqLvGCVop/ua4y6vThY3CVzMlZW4mvJnSMnwJ04EbGalkYrTLTRMhEyIBEZImyLVwI2J06lmQsIg3MZXVwKuAq3VuKLZFIAAimIYgAAAAFLoDYvf9upqRLUkabalXfnurSOvfxNpiau5By5ad/A0mi6vNiFYm+0raL/A5ZkOvMnGJtEojSux3J0lk2ZEHqTp6GNyM2lkBNEkg/DaV/fiNAANDfviK7AiyLyGFuoEsPUtJPz7mbY0kkbihK8U+hmrEwAGyKGwI++n10Ga0mzE5DILkSB+/f1JAkAtGv2s77seF234f5NZWkbPasdJdGvqn9jUVGWJQo3t0z/z5mdIhSta5JPoUKbMsJ6oxVP4HWumpF0IqWa7zLvZ++HtFSrKzv1TMkJfUK2MarllpzCVuC8eZXhPh7ZlhItSRJgxAZUpESTRGwRRx11aXG6N9s6d6a8TS4qN1Z80bbZPyWJfSxdbI3CWo0iAihjEFAABAAAAazbNTOK9+8jVSZsNtrtJ816GujmzcRmk7JIcCFZZhTkIjJMlFqSsyO8Jo0qpXju66egsJUui1VlwaKEI7tTL9XqgjZ0zNEwQeWhliRWZBcUSTIIkWTZCTCMFfTPmjabJXYvzZrKsey+Oa/wAm02Z8niSrFsAAypiGIAGIAAYgA1m3V2Yvr9v7GrpLPx9Mzcbbj+U3yaf2+5qqSs/P1saiIz1ZKgY5E6UszSJziIyuPvIi0VWCZSxbsk9LO5fqL2yril2WBcpO9jPSKOFmnFZ8B1NqQjo97u/nQa2m2yUSVzRy2tJ6JL6v34EI1KtS9t5+dvoXwqeTdVa0Vq0u9pGGWOprWS+v8GlluxynVpxfLfTl5K7+hGdek9akn1jSqtebikPGQ3fpuI4unO6i87dVx5NG62Yvy13s5DZzi5vdk720cJR4rS+R2OAX5cffExlr6Wf6sAAGGjEMQAAAAAAAVtpxvSn3ejTNL+rxOhqxvFp8mc25Z+JYlDFDUYr53NosQYpZjj4A+8oxSK9dZFmRhmuhRoK9Wcp/hq7VtFx116DhOF7Juo/20rbq6Oo+yvC4to0rytfsv5ktJW0Uua6FrDJJJLI58nL49R04+Hz7p04VXp+HSXSP4s//AGn2fKJn/wBipf8AJKdTpOTcfCC7K8icGZUee8uV+3rx4cJ9IxoxiuzFLuSRjqszSZWqs5100zbNzk13HT7MleHi/U5XZjzl3fc6jZPyeL9EejD4vDy/JcAANMGIYgAABlCuNMlGHUgXSbQxD7Eu5+hzcn2jpa3yvuZzNV9rxEKmJoExs2jJFjbIwfAm+4CEn7sV6rM0vdzDa+hRqMfDtK2plpwsk+P3/i3mSxkVd8/pbjfp1MMKt/aXhkefmmq9PBdrcGZolemZ4o871nJlaqyzIrVmBPZb7Uu5ep1WyX2PF+iOT2Z+rw+51eyP+Pxf2PTh8Xg5fmug2DCKuakcy3hjkrAAhMYBQu8bfBaeorDLtNIyWTOWq/M+/wC51ZyeI+eX9T9RCssUEmRi8ib0NIKY2QTJ2yKMc2Ql1XqTqe9DHPPXMsGu2mrp/wA+8sirh2XcbTXv+TW4dnDnn29H49102tMzxZVpssnnevYkyrVZnmyrWZBn2Z+rvXozrNlr8td7OR2Y7p9/2Ox2evy4++J6cfjHg5PlVhggBo0wafHVgJAXyNGAgMqYCABnJ4755f1P1ADWKVKOjG2AG0CBaAAEHJ2IgBRQxTyNbR+Z94Ac+b068HybSkWAA8j2sUyrXYAQWdjcf6n6HW7Kf5a736gB6sfi8Ofyq4IADJiAAP/Z",
      sport: "Cricket",
      src: "https://www.youtube.com/embed/R27sZdC8gug",
      title: "Mahender playing Cricket",
    },
    {
      name: "Gajender Singh",
      image:
        "data:image/jpeg;base64,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",
      sport: "Cricket",
      src: "https://www.youtube.com/embed/rW_fwcmyIfk",
      title: "Gajender playing Cricket",
    },
    {
      name: "Dharamender Singh",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXh1J0Eqg9LnHiLd2x5DlLqQGkFLfqGgvYIQ&usqp=CAU",
      sport: "Cricket",
      src: "https://www.youtube.com/embed/-YMo78jTbJw",
      title: "Dharamender playing Cricket",
    },
    {
      name: "Harmender Singh",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGFAN7UKvo70IZwE_E99S4EiidVvU9BufSbQ&usqp=CAU",
      sport: "Hockey",
      src: "https://www.youtube.com/embed/Zp_MHWTPC6I",
      title: "Harmender playing Hockey",
    },
    {
      name: "Nilender Singh",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVNgQLU2XGU3A1gNd5IUFBDQD0-ZNi5rTFVg&usqp=CAU",
      sport: "Badminton",
      src: "https://www.youtube.com/embed/1JPlmLKsrB4",
      title: "Nilender playing Badminton",
    },
    {
      name: "Suresh  Singh",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJEYpUbdrjL33VF59VwvFI3Ys5im0PP1swww&usqp=CAU",
      sport: "Athletics",
      src: "https://www.youtube.com/embed/gkumUDj2MZg",
      title: "Suresh  playing Athletics",
    },
    {
      name: "Mahesh Singh",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPIaY5Vi88FDqXUC_-_XxqBjuwQdCa3SB8kQ&usqp=CAU",
      sport: "Cricket",
      src: "https://www.youtube.com/embed/OEkqzREtGKE",
      title: "Mahesh playing Cricket",
    },
  ];

  const profileUrl =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGFAN7UKvo70IZwE_E99S4EiidVvU9BufSbQ&usqp=CAU";

  const EditProfile = () => {
    return (
      <div className="editprofile">
        <div className="editprofileSection">
          <button onClick={() => setIsEditting(false)}>
            <h2>X</h2>
          </button>
          <div className="editform">
            <label htmlFor="profilepic">Profilepic:</label>
            <input type="file" id="profilepic" />
          </div>
          <div className="editform">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" placeholder="Enter name" />
          </div>
          <div className="editform">
            <label htmlFor="description">Journey:</label>
            <textarea
              name="description"
              id="description"
              cols="30"
              rows="10"
            ></textarea>
          </div>
          <div className="editform">
            <label htmlFor="">Age:</label>
            <input type="number" placeholder="age in years" />
          </div>
          <div className="editform">
            <label htmlFor="">Gender</label>
            <select name="" id="">
              <option value="">Male</option>
              <option value="">Female</option>
              <option value="">Other</option>
            </select>
          </div>
          <div className="editform">
            <label htmlFor="">Father's name:</label>
            <input type="text" placeholder="Enter Father's name" />
          </div>
          <div className="editform">
            <label htmlFor="">Mother's name:</label>
            <input type="text" placeholder="Enter Mother's name" />
          </div>
          <div className="editform">
            <label htmlFor="">Sport</label>

            <select name="" id="">
              <option value="">Cricket</option>
              <option value="">Volleyball</option>
              <option value="">Badminton</option>
              <option value="">Basketball</option>
              <option value="">Hockey</option>
              <option value="">Athletics</option>
            </select>
          </div>
          <button onClick={() => setIsEditting(false)}>Save</button>
        </div>
      </div>
    );
  };

  // name : "",
  // age :"",
  // sex :" ",
  // fname :"",
  // mname :"",
  // address :"",
  // skilledSports : "",
  // achievements :" ",
  // journeyWriteUp:"",
  // creatorName:"",
  // creatorWalletAddress :""

  return (
    <>
      <div className="profilepage">
        <div className="profileSection">
          <div className="imageSection">
            <img src={profileUrl} alt="" />
          </div>
          <div className="dataSection">
            <h1>Mahender Singh</h1>
            <h2>Hockey Player</h2>
            <div className="playerdetails">
              <h3>Gender:</h3>
              <h3>Male</h3>
            </div>
            <div className="playerdetails">
              <h3>Father&apos;s Name:</h3>
              <h3> Jitender Singh</h3>
            </div>
            <div className="playerdetails">
              <h3>Mother&apos;s Name:</h3>
              <h3>Suneeta Kaur</h3>
            </div>

            <div className="playerdetails">
              <h3>Added by:</h3>
              <a
                onClick={() => {
                  navigate("/profile");
                }}
              >
                Coach Priti Kaur
              </a>
            </div>

            <h3>
              The difference between the old ballplayer and the new ballplayer
              is the jersey. The old ballplayer cared about the name on the
              front. The new ballplayer cares about the name on the back."
              sports caption for Instagram Witness the Power. The harder you
              work, the harder it is to surrender. "One day of practice is like
              one day of clean living. It doesn't do you any good." What makes
              something special is not just what you have to gain, but what you
              feel there is to lose. A champion is afraid of losing. Everyone
              else is afraid of winning. A snooker game mixes ritual with
              geometry
            </h3>
            <button onClick={() => setIsEditting(true)}>
              <h2>Edit Profile</h2>
            </button>
          </div>
        </div>
        {isEditting && <EditProfile />}

        <div className="videoSection">
          {videosData.map((video) => {
            return (
              <div className="videocontainer" key={video.title}>
                <KhelVideo
                  src={video.src}
                  title={"Mahender Singh playing Hockey"}
                  player={"Mahender Singh"}
                  sport={"Hockey"}
                  rating="3.5"
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Talent;
