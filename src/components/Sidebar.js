import React from "react";
import logo_kemenhan from "../assets/logo_kemenhan.png";
import map_view_active from "../assets/map_view_active.png";
import table_view_active from "../assets/table_view_active.png";
import time_line_active from "../assets/time_line_active.png";
import filter_icon from "../assets/filter_icon.png";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Rectangle,
} from "react-leaflet";
export default function Sidebar() {
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];
  return (
    <div className="bg-gray-600 w-5/5 min-h-screen flex">
      <div className="w-1/4 bg-white px-1 py-3 rounded-sm">
        <div className="flex">
          <div className="left-navigation w-1/6 flex flex-col items-center mr-4">
            <img src={logo_kemenhan} alt="" className="mb-2" />
            <div className="mb-2 flex justify-center flex-col items-center">
              <img src={map_view_active} alt="" />
              <span className="text-xs">PETA</span>
            </div>
            <div className="mb-2 flex justify-center flex-col items-center">
              <img src={time_line_active} alt="" />
              <span className="text-xs">LINI MASA</span>
            </div>
            <div className="mb-2 flex justify-center flex-col items-center">
              <img src={table_view_active} alt="" />
              <span className="text-xs">SETELAN</span>
            </div>
          </div>
          <div className="content w-5/6 flex flex-col pr-5">
            <div className="text-xl mb-3 mt-2 text-left items-center font-bold">
              SISKANHAMRATA
            </div>
            <span className="mb-3">
              Visualisasi ditujukan untuk memudahkan Instansi untuk menemukan
              pemetaan menyangkut potensi dan Sumber Daya.
            </span>
            <div className="filter mt-8">
              <div>
                <div className="filter-header flex items-center">
                  <img src={filter_icon} alt="" className="mr-2" />
                  <div className="flex justify-between w-full">
                    <p>Saring Informasi</p>
                    <p className="font-bold text-blue-400">RESET</p>
                  </div>
                </div>

                <div className="mt-3">
                  <label
                    htmlFor="category"
                    className="text-xs text-gray-400 pl-1"
                  >
                    KATEGORI
                  </label>
                  <div className="filter-menu flex justify-between pb-2">
                    <select name="category" id="category" className="w-full">
                      <option value="perikanan">Perikanan</option>
                      <option value="perikanan">Minyak dan Gas Alam</option>
                      <option value="perikanan">Padi</option>
                    </select>
                  </div>
                  <hr className="w-full border-1 border-black" />
                </div>
                <div className="mt-3">
                  <label
                    htmlFor="category"
                    className="text-xs text-gray-400 pl-1"
                  >
                    JENIS USAHA
                  </label>
                  <div className="filter-menu flex justify-between pb-2">
                    <select
                      name="business_type"
                      id="business_type"
                      className="w-full"
                    >
                      <option value="budidaya">Budidaya</option>
                      <option value="another">Tangkap Laut</option>
                      <option value="another">Tangkap PUD</option>
                    </select>
                  </div>
                  <hr className="w-full border-1 border-black" />
                </div>
                <div className="mt-3">
                  <label
                    htmlFor="category"
                    className="text-xs text-gray-400 pl-1"
                  >
                    TAHUN LAPORAN
                  </label>
                  <div className="filter-menu flex justify-between pb-2">
                    <select name="category" id="category" className="w-full">
                      <option value="perikanan">2021</option>
                      <option value="perikanan">2020</option>
                    </select>
                  </div>
                  <hr className="w-full border-1 border-black" />
                </div>
                <div className="mt-3">
                  <label
                    htmlFor="category"
                    className="text-xs text-gray-400 pl-1"
                  >
                    PROVINSI
                  </label>
                  <div className="filter-menu flex justify-between pb-2">
                    <select name="category" id="category" className="w-full">
                      <option value="perikanan">DKI JAKARTA</option>
                      <option value="perikanan">Another Province</option>
                    </select>
                  </div>
                  <hr className="w-full border-1 border-black" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-black h-screen leaflet-container">
        <MapContainer
          center={[-6.2295712, 106.759478]}
          zoom={25}
          scrollWheelZoom={true}
        >
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[-6.2295712, 106.759478]}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
          <Marker position={[-6.2299715, 106.759881]}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
          <Marker position={[-6.2299215, 106.759181]}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
          <Marker position={[-6.2289715, 106.759181]}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
          <Rectangle
            bounds={[
              [-6.2299215, 106.759181],
              [-6.2289715, 106.759581],
            ]}
            pathOptions={{ color: "black" }}
          >
            <Popup direction="bottom" offset={[0, 20]} opacity={1} permanent>
              <div className="flex flex-col w-48">
                <div className="field-info flex flex-col mb-2">
                  <span className="text-lg font-light text-gray-500">
                    Kategori
                  </span>
                  <span className="text-xl font-bold text-black">
                    Perikanan
                  </span>
                </div>
                <div className="field-info flex flex-col">
                  <span className="text-sm font-light text-gray-500">
                    Provinsi
                  </span>
                  <span className="text-lg text-black">Aceh</span>
                </div>
              </div>
              <hr className="w-full border-1 border-gray-700" />
            </Popup>
          </Rectangle>
        </MapContainer>
      </div>
    </div>
  );
}
