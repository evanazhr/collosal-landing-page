"use client";
import Image from "next/image";
import { clients } from "@/data/data.mock";

// Import komponen Swiper React
import { Swiper, SwiperSlide } from "swiper/react";

// Import gaya dasar Swiper
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Import modul yang dibutuhkan dari Swiper
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { useState } from "react";

export default function TestimonialSection() {
  // State untuk melacak indeks slide aktif saat ini
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="flex w-full items-center justify-center py-12">
      <div className="relative mx-auto w-full max-w-[1366px] px-4 md:px-16">
        <div className="flex flex-col items-center justify-center">
          <p className="md:text-md text-sm">TESTIMONIAL</p>
          <h2 className="mb-8 max-w-[500px] text-center text-3xl font-bold">
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
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          onSwiper={(swiper) => setActiveIndex(swiper.realIndex)}
        >
          {clients.map((client, index) => (
            <SwiperSlide key={index}>
              <div
                className={`bg-light my-20 flex h-full transform flex-col items-center justify-center gap-2 rounded-lg p-8 text-center shadow-xl transition-all duration-300 ease-in-out md:p-12 ${
                  index === activeIndex
                    ? "translate-y-[-50px] scale-[1.05] shadow-2xl" // Card aktif: sedikit lebih besar, bayangan lebih kuat, naik 15px
                    : "scale-100 text-white/60 shadow-md"
                }`}
              >
                <div className="relative aspect-square">
                  <Image
                    src={client.img}
                    alt={client.name + " image"}
                    width={70}
                    height={70}
                    className="mb-4 rounded-full object-cover"
                  />

                  <Image
                    src="/assets/icons/quote.svg"
                    className="bg-primary border-card-dark absolute right-0 bottom-0 size-6 rounded-full border-2 p-1.5"
                    alt=""
                    width={15}
                    height={15}
                  />
                </div>
                <p className="mt-2 text-xl font-semibold">{client.name}</p>
                <p className="text-md mb-4 font-medium text-white/60">
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
