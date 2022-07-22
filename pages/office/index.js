import { OfficeLayout } from "../../components/officeLayout";
import DataGrid from "react-data-grid";
import { useEffect } from "react";

const columns = [
  { key: "id", name: "ID", resizable: true },
  { key: "first_name", name: "First Name", resizable: true },
  { key: "last_name", name: "Last Name", resizable: true },
  { key: "email", name: "Email", resizable: true },
  { key: "gender", name: "Gender", resizable: true },
  { key: "ip_address", name: "IP", resizable: true },
];

export default function Dashboard() {
  return (
    <div>
      <OfficeLayout>
        <DataGrid
          columns={columns}
          rows={customers}
          style={{ resize: "both", width: "100%", height: "45%" }}
        />
      </OfficeLayout>
    </div>
  );
}

const customers = [
  {
    id: 1,
    first_name: "Karissa",
    last_name: "Dempster",
    email: "kdempster0@mail.ru",
    gender: "Female",
    ip_address: "144.123.38.93",
  },
  {
    id: 2,
    first_name: "Karel",
    last_name: "Westfield",
    email: "kwestfield1@infoseek.co.jp",
    gender: "Female",
    ip_address: "2.9.239.124",
  },
  {
    id: 3,
    first_name: "Yetty",
    last_name: "Thon",
    email: "ython2@forbes.com",
    gender: "Female",
    ip_address: "7.245.70.141",
  },
  {
    id: 4,
    first_name: "Annmarie",
    last_name: "Sherrocks",
    email: "asherrocks3@e-recht24.de",
    gender: "Female",
    ip_address: "226.135.229.114",
  },
  {
    id: 5,
    first_name: "Hedwiga",
    last_name: "Jeffreys",
    email: "hjeffreys4@wisc.edu",
    gender: "Female",
    ip_address: "6.183.78.154",
  },
  {
    id: 6,
    first_name: "Rosaleen",
    last_name: "Bebbington",
    email: "rbebbington5@symantec.com",
    gender: "Female",
    ip_address: "193.179.24.106",
  },
  {
    id: 7,
    first_name: "Rosalie",
    last_name: "Sturm",
    email: "rsturm6@cocolog-nifty.com",
    gender: "Female",
    ip_address: "195.166.211.43",
  },
  {
    id: 8,
    first_name: "Karin",
    last_name: "Carse",
    email: "kcarse7@jigsy.com",
    gender: "Female",
    ip_address: "46.99.113.47",
  },
  {
    id: 9,
    first_name: "Dorella",
    last_name: "Ferrillio",
    email: "dferrillio8@blog.com",
    gender: "Female",
    ip_address: "196.192.154.83",
  },
  {
    id: 10,
    first_name: "Corie",
    last_name: "Ellum",
    email: "cellum9@ebay.com",
    gender: "Female",
    ip_address: "70.77.56.125",
  },
  {
    id: 11,
    first_name: "Joleen",
    last_name: "Crissil",
    email: "jcrissila@hp.com",
    gender: "Female",
    ip_address: "89.182.164.177",
  },
  {
    id: 12,
    first_name: "Ally",
    last_name: "Vlasyuk",
    email: "avlasyukb@indiegogo.com",
    gender: "Female",
    ip_address: "140.28.35.209",
  },
  {
    id: 13,
    first_name: "Corny",
    last_name: "Auckland",
    email: "caucklandc@shareasale.com",
    gender: "Male",
    ip_address: "222.139.196.102",
  },
  {
    id: 14,
    first_name: "Sherill",
    last_name: "Prestwich",
    email: "sprestwichd@cnet.com",
    gender: "Female",
    ip_address: "98.205.146.83",
  },
  {
    id: 15,
    first_name: "Perry",
    last_name: "Weems",
    email: "pweemse@moonfruit.com",
    gender: "Female",
    ip_address: "70.211.176.241",
  },
  {
    id: 16,
    first_name: "Wood",
    last_name: "Buist",
    email: "wbuistf@goo.ne.jp",
    gender: "Male",
    ip_address: "236.84.94.120",
  },
  {
    id: 17,
    first_name: "Sioux",
    last_name: "Ferreira",
    email: "sferreirag@house.gov",
    gender: "Female",
    ip_address: "206.110.78.90",
  },
  {
    id: 18,
    first_name: "Ulises",
    last_name: "Gellan",
    email: "ugellanh@dion.ne.jp",
    gender: "Male",
    ip_address: "241.213.217.252",
  },
  {
    id: 19,
    first_name: "Beatrisa",
    last_name: "Bound",
    email: "bboundi@home.pl",
    gender: "Female",
    ip_address: "30.252.201.180",
  },
  {
    id: 20,
    first_name: "Alwyn",
    last_name: "Hunday",
    email: "ahundayj@friendfeed.com",
    gender: "Male",
    ip_address: "180.133.33.197",
  },
  {
    id: 21,
    first_name: "Francklin",
    last_name: "Kebell",
    email: "fkebellk@statcounter.com",
    gender: "Male",
    ip_address: "7.69.62.54",
  },
  {
    id: 22,
    first_name: "Roosevelt",
    last_name: "Knapp",
    email: "rknappl@yellowbook.com",
    gender: "Male",
    ip_address: "205.103.238.0",
  },
  {
    id: 23,
    first_name: "Kylila",
    last_name: "Kuhnel",
    email: "kkuhnelm@purevolume.com",
    gender: "Female",
    ip_address: "200.54.13.242",
  },
  {
    id: 24,
    first_name: "Cordy",
    last_name: "Middleweek",
    email: "cmiddleweekn@wsj.com",
    gender: "Polygender",
    ip_address: "166.63.65.191",
  },
  {
    id: 25,
    first_name: "Slade",
    last_name: "Sancroft",
    email: "ssancrofto@plala.or.jp",
    gender: "Male",
    ip_address: "237.254.61.122",
  },
];
