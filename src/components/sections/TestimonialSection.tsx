"use client"; // Penting: Direktif ini menandakan komponen ini akan dijalankan di sisi klien

import Image from "next/image";
import { clients } from "@/data/data.mock"; // Pastikan path ini benar ke data klien Anda

// Import komponen Swiper React
import { Swiper, SwiperSlide } from "swiper/react";

// Import gaya dasar Swiper
import "swiper/css";
import "swiper/css/pagination"; // Untuk titik-titik navigasi
import "swiper/css/navigation"; // Untuk tombol panah navigasi

// Import modul yang dibutuhkan dari Swiper
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { useState } from "react"; // Tambahkan import useState untuk melacak slide aktif

export default function TestimonialSection() {
  // State untuk melacak indeks slide aktif saat ini
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="w-full flex justify-center items-center py-12">
      <div className="w-full max-w-[1366px] px-4 md:px-8 mx-auto relative">
        <div className="flex flex-col items-center justify-center">
          <p>TESTIMONIAL</p>
          <h2 className="text-3xl max-w-[500px] font-bold text-center mb-8">
            What do our clients say that we never let down?
          </h2>
        </div>
        {/* --- Komponen Swiper Carousel --- */}
        <Swiper
          // Konfigurasi Dasar Swiper
          slidesPerView={1} // Default: Tampilkan 1 slide per tampilan
          spaceBetween={30} // Jarak antar slide dalam piksel
          loop={true} // Aktifkan looping slide (carousel akan berputar terus)
          grabCursor={true} // Ubah kursor menjadi "grab" saat di atas carousel
          // Konfigurasi Autoplay
          autoplay={{
            delay: 5000, // Durasi setiap slide akan ditampilkan (5 detik)
            disableOnInteraction: false, // Carousel akan terus autoplay meskipun pengguna menggesernya
          }}
          // Konfigurasi Pagination (Titik-Titik Navigasi)
          pagination={{
            clickable: true, // Titik-titik bisa diklik untuk navigasi langsung
            dynamicBullets: true, // Gaya titik yang lebih dinamis
          }}
          // Konfigurasi Navigation (Tombol Panah)
          // navigation={true} // Aktifkan tombol panah kiri/kanan

          // Modul yang digunakan (wajib diimpor dan didaftarkan di sini)
          modules={[Autoplay, Pagination, Navigation]}
          // Konfigurasi Responsivitas (Breakpoints)
          // Ini akan mengubah jumlah slide yang ditampilkan berdasarkan lebar layar
          breakpoints={{
            // Saat lebar layar >= 640px (ukuran 'sm' di Tailwind)
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            // Saat lebar layar >= 768px (ukuran 'md' di Tailwind)
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            // Saat lebar layar >= 1024px (ukuran 'lg' di Tailwind)
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
              centeredSlides: true,
            },
          }}
          // Event handler saat slide berubah
          // swiper.realIndex digunakan karena loop:true dapat mempengaruhi swiper.activeIndex
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          // Event ini untuk mengatur activeIndex saat inisialisasi awal Swiper
          onSwiper={(swiper) => setActiveIndex(swiper.realIndex)}
        >
          {/* --- Iterasi Melalui Data Klien untuk Setiap SwiperSlide --- */}
          {clients.map((client, index) => (
            <SwiperSlide key={index}>
              {/* Ini adalah div pembungkus setiap kartu testimonial */}
              <div
                className={`flex flex-col my-20 items-center justify-center text-center p-8 md:p-12 gap-2 
                           bg-light rounded-lg shadow-xl h-full 
                           transform transition-all duration-300 ease-in-out
                           ${
                             // Kelas kondisional untuk efek "kartu di tengah lebih tinggi"
                             index === activeIndex
                               ? "scale-[1.05] shadow-2xl translate-y-[-50px]" // Card aktif: sedikit lebih besar, bayangan lebih kuat, naik 15px
                               : "scale-100 shadow-md" // Card tidak aktif: ukuran normal, bayangan normal
                           }`}
              >
                <Image
                  src={client.img}
                  alt={client.name + " image"}
                  width={70} // Ukuran gambar sedikit lebih besar untuk dampak visual
                  height={70}
                  className="rounded-full object-cover mb-4 border-4 border-blue-400" // Border yang lebih menonjol
                />
                <p className="text-xl font-semibold mt-2">{client.name}</p>
                <p className="text-md text-white/60 mb-4 font-medium">
                  {client.title}
                </p>
                <p className="text-lg leading-relaxed">{client.review}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
