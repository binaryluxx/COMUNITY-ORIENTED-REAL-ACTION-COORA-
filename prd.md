Product Requirements Document (PRD)

Nama Produk: COORA (Community Oriented Real Action)
Platform: Mobile (iOS & Android)
Status: Draft

1. Executive Summary

COORA adalah aplikasi mobile lintas platform yang dirancang untuk menghubungkan korban bencana, relawan lokal, dan donatur global dalam satu ekosistem digital berbasis teknologi.

Tujuan utama aplikasi ini adalah mempercepat proses penyaluran bantuan dengan memanfaatkan teknologi GPS, real-time map integration, machine learning prioritization, dan secure digital donation system.

COORA memungkinkan korban mengirim permintaan bantuan secara cepat, relawan menemukan misi terdekat berdasarkan lokasi dan urgensi, serta donatur memberikan bantuan finansial dengan transparansi penuh.

Dengan pendekatan teknologi ini, COORA bertujuan untuk meningkatkan efisiensi respons kemanusiaan dan mengurangi keterlambatan bantuan yang sering terjadi akibat keterbatasan informasi dan koordinasi.

2. Problem Statement

Setiap tahun terjadi ribuan bencana alam dan insiden darurat di berbagai wilayah dunia. Banyak korban mengalami kesulitan mendapatkan bantuan dengan cepat karena beberapa faktor utama:

Kurangnya sistem koordinasi digital yang terintegrasi

Informasi lokasi korban yang tidak akurat

Tidak adanya sistem prioritas berbasis urgensi

Kurangnya transparansi dalam penyaluran donasi

Relawan kesulitan menemukan lokasi bantuan secara real-time

Akibatnya, bantuan sering datang terlambat atau tidak tepat sasaran. COORA hadir untuk mengatasi masalah tersebut melalui platform digital yang terintegrasi dan berbasis data.

3. Product Goals

Tujuan utama pengembangan COORA:

Mempercepat respon bantuan darurat.

Menghubungkan korban dengan relawan terdekat secara otomatis.

Menyediakan sistem donasi yang transparan dan aman.

Meningkatkan partisipasi relawan melalui gamifikasi.

Menyediakan data prioritas bantuan berbasis machine learning.

4. Target Users (User Personas)
4.1 Requester (Korban / Pihak Membutuhkan)

Karakteristik:

Korban bencana alam

Korban kecelakaan

Komunitas yang membutuhkan bantuan

Kebutuhan:

Mengirim permintaan bantuan dengan cepat

Memberikan lokasi kejadian

Melampirkan bukti kondisi darurat

4.2 Volunteer (Relawan)

Karakteristik:

Individu yang ingin membantu

Relawan organisasi kemanusiaan

Komunitas sosial

Kebutuhan:

Melihat permintaan bantuan terdekat

Memilih misi yang sesuai

Melacak progres bantuan

4.3 Donor (Donatur)

Karakteristik:

Individu

Organisasi

Komunitas sosial global

Kebutuhan:

Memberikan bantuan finansial

Melihat transparansi penggunaan dana

Mendapat laporan donasi

5. Core Features
5.1 User Management & Security
Registrasi Pengguna

Pengguna harus mengisi:

Username

Email

Nomor telepon

Password

Lokasi awal (GPS)

Validasi meliputi:

Email verification

Password strength validation

OTP untuk nomor telepon

Authentication System

Menggunakan:

JWT (JSON Web Token)

Secure session management

Token refresh mechanism

Incognito Mode

Fitur untuk menjaga keamanan korban dengan:

Menyembunyikan nama pengguna

Menyembunyikan nomor telepon

Menampilkan hanya lokasi dan kebutuhan bantuan

5.2 Request Assistance System
Request Creation

Pengguna dapat membuat permintaan bantuan dengan mengisi:

Judul permintaan

Deskripsi kondisi

Kategori bencana

Jumlah korban

Lokasi GPS

Foto atau video

Kategori Bencana

Contoh kategori:

Gempa bumi

Banjir

Kebakaran

Kecelakaan

Kebutuhan medis darurat

Kekurangan makanan

Media Attachment

Pengguna dapat mengunggah:

Foto kondisi lokasi

Video pendek

Bukti kerusakan

Media akan disimpan di cloud storage Supabase.

Machine Learning Prioritization

Setiap permintaan akan diberi skor urgensi oleh sistem ML.

Faktor yang dianalisis:

Jenis bencana

Kepadatan penduduk area

Kerentanan geografis

Kata kunci dalam deskripsi

Data historis respon bantuan

Output sistem:

Urgency Score (0–100)

Prioritas notifikasi relawan

Urutan tampil pada peta

5.3 Map & Volunteer System
Real-Time Map

Relawan dapat melihat:

Titik permintaan bantuan

Radius jarak dari lokasi mereka

Tingkat urgensi

Teknologi yang digunakan:

Map API (Google Maps / Mapbox)

Real-time data update

Mission Acceptance

Relawan dapat:

Memilih misi bantuan

Melihat detail permintaan

Menekan tombol Accept Mission

Status misi:

Accepted

On the Way

Handling

Completed

Mission Tracking

Relawan dapat:

Mengupdate status misi

Menambahkan foto bukti bantuan

Menulis laporan singkat

Volunteer History

Relawan dapat melihat:

Jumlah misi diselesaikan

Jam kontribusi

Total poin yang diperoleh

5.4 Donation System
Financial Donations

Donatur dapat:

Memilih kasus bantuan

Memberikan dana

Menentukan jumlah donasi

Payment Gateway

Integrasi dengan layanan pembayaran seperti:

Stripe

PayPal

Midtrans

Fitur keamanan:

Secure payment processing

Encrypted transaction

Donation Transparency

Donatur dapat melihat:

Total dana terkumpul

Dana yang telah digunakan

Laporan penggunaan dana

5.5 Gamification System
Leaderboard

Menampilkan:

Relawan paling aktif

Top contributors

Monthly ranking

Points System

Relawan mendapatkan poin berdasarkan:

Menyelesaikan misi

Kecepatan respon

Konsistensi aktivitas

Badges

Contoh badge:

First Responder

10 Missions Completed

Disaster Hero

Activity Streak

Relawan mendapatkan reward jika membantu secara konsisten dalam periode tertentu.

6. Technical Architecture

COORA menggunakan arsitektur client-server berbasis cloud.

Frontend

Framework: React Native

Fungsi:

UI/UX aplikasi

Form request bantuan

Integrasi peta

Tampilan leaderboard

Notifikasi real-time

Backend

Framework: NestJS

Fungsi:

API RESTful

Authentication (JWT)

Business logic

Machine learning integration

Donation processing

Gamification logic

Database & Cloud

Platform: Supabase (PostgreSQL)

Fungsi:

Penyimpanan data pengguna

Penyimpanan request bantuan

Penyimpanan log aktivitas

Penyimpanan media

Keamanan:

Data encryption at rest

Secure API access

Machine Learning Module

Model ML digunakan untuk:

Mengklasifikasikan urgensi permintaan

Menentukan prioritas bantuan

Input data:

Deskripsi teks

Data geospasial

Kategori bencana

Output:

Urgency score

Priority ranking

7. Security & Privacy

Keamanan sistem meliputi:

End-to-end encryption untuk komunikasi data

Secure authentication menggunakan JWT

Enkripsi database

Validasi input pengguna

Perlindungan dari spam request

8. Success Metrics (KPIs)

Indikator keberhasilan aplikasi:

Jumlah permintaan bantuan yang terselesaikan

Waktu rata-rata respon relawan

Jumlah relawan aktif

Total donasi terkumpul

Tingkat kepuasan pengguna