# Hikari StressCare: คู่มือโปรเจกต์ Rush (ฉบับภาษาไทย)

> เว็บไซต์ดูแลความเครียด สำหรับ Rush ของ 42 Bangkok Discovery Piscine
> ทีม: cchanama + (login เพื่อนร่วมทีม)
>
> **วิธีอ่านไฟล์นี้ให้สวย:** เปิดใน VS Code แล้วกด `Ctrl+Shift+V` (Preview) หรือเปิดโฟลเดอร์ rush บน GitHub ไฟล์นี้จะแสดงเป็นหน้าเอกสารอัตโนมัติ

## สารบัญ

1. [ในโฟลเดอร์มีอะไรบ้าง](#1-ในโฟลเดอร์มีอะไรบ้าง)
2. [วางไฟล์และแก้ auteur](#2-วางไฟล์และแก้-auteur)
3. [เปิดเว็บและตรวจตามเกณฑ์](#3-เปิดเว็บและตรวจตามเกณฑ์)
4. [อัปโหลดขึ้น GitHub](#4-อัปโหลดขึ้น-github)
5. [อธิบาย index.html](#5-อธิบาย-indexhtml)
6. [อธิบาย style.css](#6-อธิบาย-stylecss)
7. [อธิบาย script.js](#7-อธิบาย-scriptjs)
8. [อธิบายไฟล์ภาษา (lang/)](#8-อธิบายไฟล์ภาษา-lang)
9. [ระบบ Login: ทำงานอย่างไร และข้อจำกัด](#9-ระบบ-login-ทำงานอย่างไร-และข้อจำกัด)
10. [คำถามที่ผู้ตรวจอาจถาม](#10-คำถามที่ผู้ตรวจอาจถาม)
11. [แหล่งอ้างอิง](#11-แหล่งอ้างอิง)

---

## 1. ในโฟลเดอร์มีอะไรบ้าง

```
rush/
├── auteur          ← login ของทีม 2 คน (บรรทัดละ 1 คน) ตามที่โจทย์กำหนด
├── README.md       ← คู่มือนี้
├── index.html      ← โครงหน้าเว็บ (เนื้อหาทั้งหมด)
├── style.css       ← หน้าตา สี ขนาด การจัดวาง และ responsive
├── script.js       ← การทำงานเมื่อผู้ใช้กดปุ่ม (JavaScript)
├── lang/           ← ไฟล์ข้อความ 10 ภาษา (1 ไฟล์ต่อ 1 ภาษา)
│   ├── th.js  en.js  zh.js  hi.js  es.js
│   └── fr.js  ar.js  pt.js  ru.js  ja.js
└── images/         ← รูป .webp 10 รูป
```

**ทำไมแยกไฟล์:** HTML = "โครงบ้าน", CSS = "สีและการตกแต่ง", JS = "ไฟฟ้าที่ทำให้ของในบ้านทำงาน", lang = "ป้ายข้อความแต่ละภาษา" แยกกันแล้วอ่านง่าย แก้ง่าย และอธิบายผู้ตรวจได้ทีละส่วน

### ฟีเจอร์ทั้งหมด

| ส่วน | ทำอะไรได้ |
|---|---|
| แถบเมนู (sticky) | ติดด้านบนตลอดเวลาเลื่อน, มีเมนูเลือกภาษา 10 ภาษา และปุ่มบัญชีที่แสดง **ชื่อผู้ใช้ + สถานะสมาชิก** |
| จุดเด่น 4 ข้อ | **กดได้ทุกการ์ด** พาไปยังฟีเจอร์จริง: เข้าใจตัวเอง → แบบประเมิน, รับมือได้จริง → ดูแลตัวเอง, **เห็นความเปลี่ยนแปลง → บันทึกของฉัน (กราฟ)**, ข้อมูลน่าเชื่อถือ → งานวิจัย |
| เข้าสู่ระบบ / สมัครสมาชิก | ชื่อผู้ใช้ a–z 0–9 ยาว 5–30 ตัว, รหัสผ่าน ≥ 8 ตัว มีพิมพ์เล็ก พิมพ์ใหญ่ ตัวเลข อักขระพิเศษ **เงื่อนไขโผล่เฉพาะตอนชี้เมาส์ที่ไอคอน ⓘ** (ไม่บังช่องกรอก) และติ๊ก ✓ ทีละข้อตามที่พิมพ์ |
| แบบประเมินความเครียด | 18 ข้อ, คะแนนเต็ม 15, กราฟปัจจัย 4 ด้าน, คำแนะนำเฉพาะคน, ผลย้อนหลัง 5 ครั้ง |
| ดูแลตัวเอง | การ์ด 8 ใบ กดลูกศรเพื่อดูขั้นตอน |
| ฝึกหายใจ | วงกลมขยาย/หด 3 รูปแบบ 3 ระยะเวลา นับครั้งที่ฝึกในวันนี้ |
| งานวิจัย | การ์ดงานวิจัยจริง 8 ชิ้น กดเพื่อเปิดต้นฉบับ |
| ตัวอย่างแอป | จอมือถือ 3 จอ เลือกอารมณ์ได้จริง |
| **ความเปลี่ยนแปลงของฉัน** | กราฟเส้นคะแนนความเครียด 10 ครั้งล่าสุด + สรุปดีขึ้น/แย่ลงจากครั้งแรก, กราฟแท่งอารมณ์ 7 วัน + อารมณ์ที่พบบ่อย, ปุ่มบันทึกอารมณ์วันนี้ |
| **บันทึกของฉัน (log)** | ทุกรายการมี **เวลา, ชื่อผู้ใช้, สถานะ (Free/Premium/Care+), กิจกรรม, รายละเอียด** เก็บทุกครั้งที่สมัคร/เข้า/ออกระบบ ประเมิน ฝึกหายใจ บันทึกอารมณ์ เปลี่ยนแผน มีตัวกรอง จำนวนครั้งที่เข้าระบบ เวลาเข้าล่าสุด และดาวน์โหลด CSV |
| แผนบริการ | Free / Premium / Care+ เลือกแผนได้ (จำลอง ไม่มีการชำระเงิน) สถานะไปแสดงที่ปุ่มบัญชีและใน log |
| ขอความช่วยเหลือ | สายด่วน 1323, 1669, 1300 กดโทรได้ |

> **หมายเหตุเรื่องคำว่า "login" ในโจทย์:** ในโจทย์ Rush คำว่า login หมายถึง **ชื่อ login 42 ของสมาชิก** ที่ต้องเขียนในไฟล์ `auteur` ส่วนระบบ Login + Log ในเว็บนี้เป็น **ฟีเจอร์เพิ่มเติม (โบนัส)** ที่ทีมทำเพิ่มเพื่อให้ผู้ใช้ได้ประโยชน์มากขึ้น ทั้งสองอย่างมีครบ

---

## 2. วางไฟล์และแก้ auteur

ทำใน Terminal ทีละบรรทัด

**1) ถ้ามีโฟลเดอร์ rush เก่าอยู่แล้ว ให้เปลี่ยนชื่อเก็บไว้ก่อน** (ถ้าไม่มี ข้ามได้)

```bash
cd ~/discovery_piscine
mv rush rush_old
```

**2) แตกไฟล์ zip** (สมมติว่าดาวน์โหลดไว้ใน Downloads)

```bash
unzip ~/Downloads/Hikari_StressCare_rush.zip -d ~/discovery_piscine
ls -R rush
```

ต้องเห็น `auteur  README.md  images  index.html  lang  script.js  style.css` และใน `rush/lang` มี 10 ไฟล์ ใน `rush/images` มี 10 รูป

**3) แก้ไฟล์ auteur ใส่ login ของเพื่อน**

```bash
nano rush/auteur
```

แก้ `xlogin` เป็น login ของเพื่อน → `Ctrl+O` → `Enter` → `Ctrl+X` แล้วตรวจ:

```bash
cat -e rush/auteur
```

ต้องได้:

```
cchanama$
loginเพื่อน$
```

| คำสั่ง | ความหมาย | ทำไมต้องใช้ |
|---|---|---|
| `cd ~/discovery_piscine` | เข้าไปในโฟลเดอร์ (change directory) | คำสั่งต่อไปจะทำงานในโฟลเดอร์นี้ |
| `mv rush rush_old` | เปลี่ยนชื่อโฟลเดอร์ (move) | กันไฟล์เก่าปนกับไฟล์ใหม่ |
| `unzip ไฟล์ -d ปลายทาง` | แตกไฟล์ zip ไปไว้ที่ปลายทาง | ห้ามเปิด index.html จากในไฟล์ zip ตรง ๆ เพราะเว็บจะหา style.css ไม่เจอ |
| `ls -R rush` | แสดงไฟล์ทั้งหมดรวมโฟลเดอร์ย่อย (-R = recursive) | เช็กว่าไฟล์ครบ |
| `nano ไฟล์` | เปิดโปรแกรมแก้ไฟล์ใน Terminal | แก้ auteur |
| `cat -e ไฟล์` | แสดงเนื้อหา และใส่ `$` ท้ายบรรทัด | เช็กว่าทุกบรรทัดมีขึ้นบรรทัดใหม่ตามโจทย์ |

---

## 3. เปิดเว็บและตรวจตามเกณฑ์

**เปิดเว็บ (แนะนำ Live Server):** เปิดโฟลเดอร์ใน VS Code → คลิกขวา `index.html` → **Open with Live Server**
หรือใน Terminal: `xdg-open rush/index.html`

> ใช้วิธีเปิดแบบเดิมทุกครั้ง เพราะบัญชีผู้ใช้และบันทึกเก็บไว้ในเบราว์เซอร์ "แยกตามที่อยู่เว็บ" ถ้าเปลี่ยนวิธีเปิด (ไฟล์ตรง ↔ Live Server) ข้อมูลจะไม่เห็นกัน

### เช็กลิสต์ตามเกณฑ์ขั้นต่ำของโจทย์

| เกณฑ์ | อยู่ตรงไหนในเว็บ | วิธีตรวจ |
|---|---|---|
| เนื้อหา ≥ 3 ส่วน | มี 11 ส่วน: Hero, จุดเด่น, ทำไมต้องดูแลใจ, แบบประเมิน, ดูแลตัวเอง, ฝึกหายใจ, งานวิจัย, แอป, บันทึกของฉัน, แผนบริการ, ขอความช่วยเหลือ | เลื่อนดูทั้งหน้า |
| ชื่อเว็บชัดเจน | โลโก้ Hikari + หัวข้อใหญ่ `<h1>` | ดูด้านบน |
| รูป ≥ 1 รูป | 10 รูปในโฟลเดอร์ images | ดูทั้งหน้า |
| แถบเมนู sticky | `.topbar` ใช้ `position: sticky` | เลื่อนลง เมนูยังอยู่ |
| ลิงก์เมนูทำงาน | ทุกลิงก์ `href="#id"` | กดทุกลิงก์ |
| Responsive | `@media` ที่ 1150px, 960px, 700px, 480px | กด F12 → `Ctrl+Shift+M` → เลือกขนาด 390px ไม่มีแถบเลื่อนแนวนอน |
| JavaScript ≥ 1 อย่าง | มีมากกว่า 10 อย่าง (ดูข้อ 7) | กดทุกปุ่ม |
| ไม่มี placeholder | ทุกข้อความเป็นเนื้อหาจริง มีแหล่งอ้างอิง | อ่านทั้งหน้า |
| ไฟล์ auteur | `rush/auteur` | `cat -e rush/auteur` |

### ทดสอบการทำงาน (ทดสอบในเบราว์เซอร์ผ่านแล้วทุกข้อ)

| ทดสอบ | ผลที่ต้องได้ |
|---|---|
| กดการ์ด "เห็นความเปลี่ยนแปลง" | เลื่อนไปที่ "บันทึกของฉัน" |
| เลือกภาษา English / 中文 / العربية ฯลฯ | ข้อความทั้งหน้าเปลี่ยน, ภาษาอาหรับเรียงจากขวาไปซ้าย, เปิดใหม่ยังเป็นภาษาเดิม |
| เปิดหน้าต่างเข้าสู่ระบบ แล้วคลิกพิมพ์ในช่องต่าง ๆ | **ไม่มีกล่องเงื่อนไขโผล่มาบัง** |
| ชี้เมาส์ที่ไอคอน ⓘ ข้างคำว่า "ชื่อผู้ใช้" / "รหัสผ่าน" | กล่องเงื่อนไขสีเข้มโผล่ข้างไอคอน เลื่อนเมาส์ออกก็หายไป (มือถือ: แตะที่ ⓘ) |
| พิมพ์ `Me_1` ในช่องชื่อผู้ใช้ | ตัวอักษรกลายเป็นตัวเล็ก `me_1` และเงื่อนไขยังไม่ติ๊ก ✓ |
| ใช้รหัส `abcd1234` แล้วชี้ที่ ⓘ ของรหัสผ่าน | เงื่อนไขพิมพ์ใหญ่และอักขระพิเศษยังเป็น ○ กดสมัครแล้วขึ้นข้อความแดง "(ชี้เมาส์ที่ ⓘ เพื่อดูเงื่อนไข)" |
| สมัคร `mey12345` รหัส `Abcd123!` | ปุ่มมุมขวาเป็น `👤 mey12345 · Free` และเลื่อนไปที่บันทึกของฉัน ขึ้น "เข้าสู่ระบบทั้งหมด 1 ครั้ง" |
| ทำแบบประเมิน 2–3 ครั้ง | กราฟเส้นมีจุดตามจำนวนครั้ง และสรุป เช่น "🎉 ดีขึ้น: คะแนนลดลง 10 จากครั้งแรก (15 → 5)" |
| แตะอารมณ์ "ดี" ในช่องบันทึกอารมณ์ | กราฟแท่งวันนี้ขึ้นสีเขียว และขึ้นข้อความ "✓ บันทึกแล้ว" |
| กด "เลือกแผนนี้" ที่ Premium | ปุ่มเป็น "✓ แผนปัจจุบัน", ปุ่มบัญชีเป็น `· Premium`, log มีแถว "เปลี่ยนแผน Free → Premium" |
| ออกจากระบบ แล้วเข้าใหม่ | "เข้าสู่ระบบทั้งหมด 2 ครั้ง" และ log มีแถวเข้า/ออกระบบพร้อมชื่อผู้ใช้ เวลา สถานะ |
| กดตัวกรอง "เข้า/ออกระบบ" | ตารางเหลือเฉพาะสมัคร/เข้า/ออกระบบ |
| กด "⬇ ดาวน์โหลด (CSV)" | ได้ไฟล์ 5 คอลัมน์: เวลา, ผู้ใช้, สถานะ, กิจกรรม, รายละเอียด |
| ออกจากระบบ แล้วเข้าด้วยรหัสผิด | ขึ้น "ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง" |

### ปัญหาที่พบบ่อย

| อาการ | สาเหตุ | วิธีแก้ |
|---|---|---|
| หน้าเว็บไม่มีสี ตัวหนังสือเรียงยาว | เปิดจากใน zip หรือ style.css ไม่อยู่ข้าง index.html | แตก zip ก่อน แล้วเปิดจาก `~/discovery_piscine/rush` |
| ข้อความไม่ขึ้น / ปุ่มกดไม่ได้ | โฟลเดอร์ `lang` หายหรือชื่อผิด | `ls rush/lang` ต้องมี 10 ไฟล์ แล้วกด F12 → Console ดูข้อความสีแดง |
| บัญชีที่สมัครไว้หายไป | เปิดเว็บคนละวิธี หรือล้างข้อมูลเบราว์เซอร์ | ใช้ Live Server ทุกครั้ง |
| ฟอนต์ไม่ใช่ Prompt | ไม่มีอินเทอร์เน็ต (ฟอนต์โหลดจาก Google) | ปกติ เว็บจะใช้ Arial แทน |

---

## 4. อัปโหลดขึ้น GitHub

ส่งเข้า repo `DPP-cchanama` (ตั้งค่า SSH ไว้แล้ว) พิมพ์ทีละบรรทัด

**1) เข้าโฟลเดอร์หลักและดูสถานะ**

```bash
cd ~/discovery_piscine
git status
```

**2) ถ้าเคยส่งเว็บ CalmMind ขึ้นไป ให้ลบไฟล์เก่าออกจาก repo** (ถ้าขึ้น `did not match any files` แปลว่าไม่มี ข้ามได้)

```bash
git rm rush/calm.svg
```

**3) เพิ่มเฉพาะโฟลเดอร์ rush** (ห้าม `git add .` เพราะ rush_old จะติดไปด้วย)

```bash
git add rush
git status
```

ต้องเห็นสีเขียว เช่น `new file: rush/lang/th.js`, `new file: rush/README.md` และ **ต้องไม่เห็น rush_old เป็นสีเขียว**

**4) บันทึกการเปลี่ยนแปลง**

```bash
git commit -m "rush: Hikari StressCare with login, activity log and 10 languages"
```

**5) ดึงงานล่าสุด แล้วส่งขึ้น GitHub**

```bash
git pull --rebase
git push
```

**6) ตรวจบนเว็บ GitHub:** เปิด `https://github.com/mokarumokaruja-beep/DPP-cchanama` → กดโฟลเดอร์ `rush` ต้องเห็นไฟล์ครบ และคู่มือนี้จะแสดงอยู่ใต้รายการไฟล์

| คำสั่ง | ความหมาย | ทำไมต้องใช้ |
|---|---|---|
| `git status` | ดูว่าไฟล์ไหนเปลี่ยน/ยังไม่ได้ส่ง | เช็กก่อนและหลังทุกขั้น จะได้ไม่ส่งไฟล์ผิด |
| `git rm ไฟล์` | ลบไฟล์และบอก git ว่าลบแล้ว | ไฟล์เก่าจะได้ไม่ค้างบน GitHub |
| `git add rush` | เลือกไฟล์ในโฟลเดอร์ rush เข้า "ตะกร้า" ที่จะส่ง | git ส่งเฉพาะไฟล์ที่ add แล้ว |
| `git commit -m "..."` | บันทึกภาพของไฟล์ในตะกร้าเป็น 1 รุ่น พร้อมข้อความ (-m = message) | ย้อนดูได้ว่าแต่ละรุ่นแก้อะไร |
| `git pull --rebase` | ดึงงานล่าสุดจาก GitHub แล้วต่องานเราไว้ข้างบน | กัน push ไม่ผ่านเพราะบน GitHub มีงานใหม่กว่า |
| `git push` | ส่ง commit ขึ้น GitHub | ไฟล์จึงขึ้นไปอยู่บนเว็บ GitHub จริง |

| ข้อความ error | แปลว่า | วิธีแก้ |
|---|---|---|
| `nothing to commit` | ยังไม่ได้ add หรือไฟล์ไม่ได้เปลี่ยน | ตรวจว่าอยู่ใน `~/discovery_piscine` แล้ว `git add rush` อีกครั้ง |
| `rejected ... fetch first` | บน GitHub มีงานใหม่กว่า | `git pull --rebase` แล้ว `git push` |
| `Permission denied (publickey)` | SSH key ไม่ทำงาน | `ssh -T git@github.com` ต้องขึ้น "Hi mokarumokaruja-beep" |
| `not a git repository` | อยู่ผิดโฟลเดอร์ | `cd ~/discovery_piscine` แล้วลองใหม่ |
| เผลอ add rush_old | ไฟล์เก่าจะติดไปด้วย | `git restore --staged rush_old` ก่อน commit |

> **ความปลอดภัย:** ห้ามถ่ายรูปหรือแชร์ token / SSH key ให้ใคร
> **ทำงานคู่:** ก่อนแก้ไฟล์ทุกครั้งให้ `git pull` และอย่าแก้ไฟล์เดียวกันพร้อมกัน

---

## 5. อธิบาย index.html

HTML บอกเบราว์เซอร์ว่า "หน้าเว็บมีอะไร เรียงอย่างไร" เขียนเป็น **แท็ก** เปิด `<ชื่อ>` ปิด `</ชื่อ>` ส่วน `<!-- ... -->` คือคอมเมนต์ (เขียนให้คนอ่าน เบราว์เซอร์ไม่แสดง)

### 5.1 หัวไฟล์

```html
<!DOCTYPE html>
<html lang="th">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hikari StressCare - ...</title>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Prompt...">
    <link rel="stylesheet" href="style.css">
</head>
```

| โค้ด | คืออะไร | ทำไมต้องใช้ |
|---|---|---|
| `<!DOCTYPE html>` | บอกว่าเป็น HTML5 | ให้เบราว์เซอร์แสดงผลตามมาตรฐานใหม่ |
| `lang="th"` | ภาษาหลักของหน้า (JS เปลี่ยนให้ตามภาษาที่เลือก) | โปรแกรมอ่านหน้าจอออกเสียงถูก |
| `meta charset="UTF-8"` | การเข้ารหัสตัวอักษร | ไม่ใส่จะเห็นภาษาไทย/จีน/อาหรับเป็นตัวอ่านไม่ออก |
| `meta name="viewport"` | ให้ความกว้างหน้าเท่ากับจอจริง | **สำคัญต่อ responsive** ไม่ใส่มือถือจะย่อหน้าคอมมาแสดง |
| `<link ... style.css>` | ดึงไฟล์ CSS มาใช้ | ถ้าไฟล์ไม่อยู่ข้างกัน หน้าเว็บจะไม่มีสี |

### 5.2 แถบเมนู + เลือกภาษา + ปุ่มเข้าสู่ระบบ

```html
<header class="topbar">
    <a href="#home" class="brand">...</a>
    <button id="menuButton" class="menu-button" aria-label="เปิดเมนู">☰</button>
    <nav id="navLinks" class="nav-links">
        <a data-i18n="header.2" href="#assessment">ประเมิน</a>
        ...
    </nav>
    <div class="top-actions">
        <select id="langSelect" class="lang-select" aria-label="เลือกภาษา">
            <option value="th">🌐 ไทย</option>
            <option value="en">🌐 English</option>
            ...
        </select>
        <button id="accountButton" class="btn btn-primary btn-small" data-dynamic>เข้าสู่ระบบ</button>
    </div>
</header>
```

| โค้ด | คืออะไร | ทำไมต้องใช้ |
|---|---|---|
| `<header>`, `<nav>` | ส่วนหัว / กลุ่มลิงก์นำทาง | บอกความหมายชัดกว่า `<div>` (semantic HTML) |
| `href="#assessment"` | ลิงก์ไปส่วนที่มี `id="assessment"` | `#` = หา id ในหน้าเดียวกัน |
| `<select>` + `<option value="en">` | กล่องเลือกแบบรายการ ค่า `value` คือรหัสภาษา | JS อ่านค่า `value` แล้วโหลดข้อความภาษานั้น |
| ชื่อภาษาใน option | เขียนเป็นภาษาของตัวเอง (English, 中文, العربية) | คนที่อ่านไทยไม่ออกก็หาภาษาตัวเองเจอ จึงไม่ต้องแปล |
| `data-i18n="header.2"` | "ป้ายชื่อ" ของข้อความนี้ | JS ใช้ป้ายนี้ไปหาคำแปลในไฟล์ภาษา (i18n = internationalization) |
| `data-dynamic` | ป้ายบอกว่าข้อความนี้ JS เขียนเอง | ข้อความเปลี่ยนไปตามสถานะ เช่น ปุ่มกลายเป็นชื่อผู้ใช้ จึงไม่ได้ดึงจากป้าย data-i18n |
| `aria-label` | คำอธิบายปุ่มสำหรับโปรแกรมอ่านหน้าจอ | ปุ่ม ☰ ไม่มีตัวหนังสือ คนตาบอดจะได้ยินว่า "เปิดเมนู" |

### 5.3 หน้าต่างเข้าสู่ระบบ (modal) + เงื่อนไขแบบชี้เมาส์ที่ ⓘ

```html
<div id="authModal" class="modal hidden" role="dialog" aria-modal="true" aria-labelledby="authTitle">
    <div class="card modal-box">
        <button id="authClose" class="modal-close" aria-label="ปิดหน้าต่าง">×</button>
        <h2 id="authTitle" data-dynamic>เข้าสู่ระบบ</h2>
        ... (ปุ่มสลับ เข้าสู่ระบบ / สมัครสมาชิก)
        <form id="authForm">
            <div class="field">
                <div class="field-head">
                    <label for="authUser" data-i18n="auth.4">ชื่อผู้ใช้</label>
                    <div class="info-wrap" tabindex="0" aria-describedby="userRules">ⓘ
                        <ul id="userRules" class="rule-tip" role="tooltip">
                            <li data-rule="uchars">ใช้ได้เฉพาะ a–z และ 0–9</li>
                            <li data-rule="ulen">ยาว 5–30 ตัวอักษร</li>
                        </ul>
                    </div>
                </div>
                <input id="authUser" type="text" autocomplete="username" maxlength="30" aria-describedby="userRules">
            </div>
            <div class="field">
                <div class="field-head">
                    <label for="authPass" data-i18n="auth.5">รหัสผ่าน</label>
                    <div class="info-wrap" tabindex="0" aria-describedby="passRules">ⓘ
                        <ul id="passRules" class="rule-tip" role="tooltip">
                            <li data-rule="plen">อย่างน้อย 8 ตัวอักษร</li>
                            <li data-rule="plower">มีตัวพิมพ์เล็ก (a–z)</li>
                            <li data-rule="pupper">มีตัวพิมพ์ใหญ่ (A–Z)</li>
                            <li data-rule="pdigit">มีตัวเลข (0–9)</li>
                            <li data-rule="pspecial">มีอักขระพิเศษ เช่น ! @ # $ %</li>
                        </ul>
                    </div>
                </div>
                <input id="authPass" type="password" maxlength="64" aria-describedby="passRules">
            </div>
            <p id="authMessage" class="quiz-message" data-dynamic></p>
            <button id="authSubmit" type="submit" class="btn btn-primary" data-dynamic>เข้าสู่ระบบ</button>
        </form>
    </div>
</div>
```

| โค้ด | คืออะไร | ทำไมต้องใช้ |
|---|---|---|
| `class="modal hidden"` | หน้าต่างลอยทับหน้าเว็บ เริ่มต้นซ่อนไว้ | JS เอา `hidden` ออกเมื่อกดปุ่มเข้าสู่ระบบ |
| `<div class="field-head">` | แถวหัวช่อง: ป้ายชื่อช่อง + ไอคอน ⓘ วางเรียงกัน | ให้ไอคอนอยู่ติดชื่อช่อง |
| `<div class="info-wrap">ⓘ ... </div>` | ไอคอน ⓘ ที่มีกล่องเงื่อนไขซ่อนอยู่ข้างใน | CSS แสดงกล่อง **เฉพาะตอนชี้เมาส์ที่ไอคอนนี้** จึงไม่บังช่องกรอกตอนพิมพ์ |
| `tabindex="0"` | ทำให้ไอคอนรับ focus ได้ (กด Tab มาถึง หรือแตะบนมือถือ) | คนที่ไม่ได้ใช้เมาส์ก็ดูเงื่อนไขได้ |
| `<ul class="rule-tip" role="tooltip">` | รายการเงื่อนไข ซ่อนไว้ก่อน | หน้า login ไม่รก |
| `data-rule="pupper"` | ชื่อเงื่อนไขแต่ละข้อ | JS ใช้ชื่อนี้ใส่ ✓ ให้ข้อที่ผ่านแล้ว |
| `aria-describedby="passRules"` | ผูกช่องกรอกกับรายการเงื่อนไข | โปรแกรมอ่านหน้าจออ่านเงื่อนไขให้คนตาบอดได้ แม้กล่องซ่อนอยู่ |
| `maxlength="30"` | พิมพ์ชื่อได้ไม่เกิน 30 ตัว | ตรงกับเงื่อนไข 5–30 ตัว |
| `type="password"` | ช่องรหัสผ่าน แสดงเป็นจุด | คนข้าง ๆ มองไม่เห็นรหัส |
| `<form>` + `type="submit"` | ฟอร์มและปุ่มส่ง | กด Enter ก็ส่งได้ (เหตุการณ์ `submit`) |
| `<label for="...">` | ป้ายผูกกับ `id` ของช่อง | กดป้ายแล้วเคอร์เซอร์ไปที่ช่อง |

### 5.4 ส่วนเนื้อหา (section)

| ส่วน | id | แท็กสำคัญ | หน้าที่ |
|---|---|---|---|
| Hero | `home` | `<h1>`, `<a class="btn">`, `<img>` | หัวข้อใหญ่ + ปุ่มเริ่มประเมิน (`<h1>` มีได้หน้าละ 1 อัน) |
| จุดเด่น 4 ข้อ | - | `<a class="feature" href="#mylog">` | ประโยชน์ของเว็บ เป็นลิงก์ กดแล้วไปยังฟีเจอร์นั้นจริง |
| ทำไมต้องดูแลใจ | - | `<h2>`, `<p class="bubble">` | ความสำคัญ + กล่องคำพูดทับรูป |
| แบบประเมิน | `assessment` | `<div id="quiz">`, `<div id="result" class="hidden">` | กล่องคำถามกับกล่องผล JS สลับกันแสดง |
| ดูแลตัวเอง | `selfcare` | `<button class="arrow-button">`, `<p class="care-steps hidden">` | การ์ด 8 ใบ กดลูกศรเปิดขั้นตอน |
| ฝึกหายใจ | `breathe` | `data-pattern`, `data-minutes`, `id="breatheCircle"` | ตัวจับเวลาหายใจ |
| งานวิจัย | `research` | `<a target="_blank" rel="noopener">` | การ์ด 8 ใบ เปิดงานวิจัยต้นฉบับในแท็บใหม่ |
| แอป | `app` | `<button class="mood-button" data-mood="good">`, `<svg>` | จอมือถือตัวอย่าง 3 จอ |
| **บันทึกของฉัน** | `mylog` | `#logGuest`, `#logUser`, `<svg id="scoreChart">`, `<svg id="moodChart">`, `.checkin-row`, `#logFilters`, `<tbody id="logBody">` | ยังไม่เข้าระบบเห็นกล่องชวนเข้า เข้าแล้วเห็นตัวเลขสรุป, **กราฟความเปลี่ยนแปลง (`id="progress"`)**, ปุ่มบันทึกอารมณ์, ตัวกรอง และตารางบันทึก |
| แผนบริการ | `plans` | `data-billing`, `<input type="checkbox">`, `<button class="plan-button" data-plan="premium">` | Free / Premium / Care+ กดเลือกแผนได้ (จำลอง) |
| ขอความช่วยเหลือ | `help` | `<a href="tel:1323">` | สายด่วน กดโทรได้บนมือถือ |

### 5.5 กราฟความเปลี่ยนแปลงและตารางบันทึก

```html
<div id="progress" class="progress-area">
    <h3>📈 ความเปลี่ยนแปลงของฉัน</h3>
    <div class="progress-grid">
        <div class="chart-card">
            <svg id="scoreChart" class="chart" viewBox="0 0 320 170" role="img"></svg>
            <p id="scoreSummary" class="chart-summary" data-dynamic></p>
        </div>
        <div class="chart-card">
            <svg id="moodChart" class="chart" viewBox="0 0 320 170" role="img"></svg>
            ...
            <div class="mood-row checkin-row">
                <button class="mood-button" data-mood="great">😄<small data-dynamic></small></button>
                ...
            </div>
        </div>
    </div>
</div>

<div id="logFilters" class="chip-row"></div>
<div class="table-wrap">
    <table class="log-table">
        <thead>
            <tr><th>เวลา</th><th>ผู้ใช้</th><th>สถานะ</th><th>กิจกรรม</th><th>รายละเอียด</th></tr>
        </thead>
        <tbody id="logBody"></tbody>
    </table>
</div>
```

- `<svg viewBox="0 0 320 170">` = "กระดาษวาดรูป" ขนาด 320×170 หน่วย JS วาดเส้น จุด แท่ง และตัวเลขลงไป และ CSS `width: 100%` ทำให้ย่อ/ขยายตามจอโดยภาพไม่แตก
- ปุ่มอารมณ์ในกราฟใช้ class `mood-button` เดียวกับจอแอปตัวอย่าง JS จึงจัดการทั้งสองที่ด้วยโค้ดชุดเดียว
- `<div id="logFilters">` เว้นว่างไว้ JS สร้างปุ่มตัวกรองให้ (ข้อความมาจากไฟล์ภาษา)
- `<table>` ตาราง, `<thead>` หัวตาราง, `<tbody>` ข้อมูล, `<tr>` 1 แถว, `<th>`/`<td>` ช่องหัว/ช่องข้อมูล ตอนนี้มี 5 คอลัมน์ตามที่ log ต้องเก็บ: **เวลา, ผู้ใช้, สถานะ, กิจกรรม, รายละเอียด**
- `<div class="table-wrap">` ครอบไว้ให้ตารางเลื่อนในกรอบได้ ไม่ทำให้หน้าเว็บล้นบนมือถือ

### 5.6 แท็กและคำที่ใช้บ่อย

| โค้ด | คืออะไร | ทำไมต้องใช้ |
|---|---|---|
| `id="..."` | ชื่อเฉพาะ มีได้อันเดียวในหน้า | ให้ JS หาเจอด้วย `getElementById` และให้ลิงก์ `#id` เลื่อนมาได้ |
| `class="..."` | ชื่อกลุ่ม ใช้ซ้ำได้ หนึ่งแท็กมีหลาย class คั่นด้วยช่องว่าง | ตกแต่งทุกอันที่เหมือนกันทีเดียว |
| `class="hidden"` | คลาสซ่อน | JS เพิ่ม/ลบเพื่อแสดง/ซ่อน |
| `data-mood="good"` | เก็บข้อมูลเพิ่มในแท็ก (data attribute) | JS อ่านด้วย `button.dataset.mood` |
| `data-i18n-alt`, `data-i18n-aria` | ป้ายสำหรับแปลคำอธิบายรูป (alt) และ aria-label | ให้คำอธิบายรูปเปลี่ยนภาษาไปด้วย |
| `<img src alt>` | รูป + คำอธิบายรูป | `alt` แสดงเมื่อรูปโหลดไม่ได้ และช่วยคนตาบอด |
| `href="tel:1323"` | ลิงก์โทรออก | บนมือถือกดแล้วโทรได้ทันที |
| `<script src="lang/th.js">` ... `<script src="script.js">` (ท้าย body) | โหลด JavaScript | ไฟล์ภาษาต้องโหลด **ก่อน** script.js เพราะ script.js ใช้ข้อความในนั้น และวางท้ายสุดเพื่อให้ HTML โหลดครบก่อน JS จะหาปุ่มเจอ |

---

## 6. อธิบาย style.css

CSS เขียนแบบ `ตัวเลือก { คุณสมบัติ: ค่า; }` ตัวเลือกบอกว่าจะแต่งอะไร: `body` = แท็ก, `.card` = class, `#id` = id, `[dir="rtl"]` = แท็กที่มี attribute นั้น ส่วน `/* ... */` คือคอมเมนต์

### 6.1 ตัวแปรสี

```css
:root {
    --primary: #3e6ee0;
    --radius: 20px;
    --shadow: 0 6px 24px rgba(52, 72, 140, 0.08);
}
.btn-outline { color: var(--primary); }
```

- `:root` = ระดับบนสุดของเว็บ `--ชื่อ` คือ **ตัวแปร CSS** `var(--ชื่อ)` คือการเรียกใช้
- **ทำไม:** อยากเปลี่ยนสีหลักทั้งเว็บ แก้ที่เดียว
- `#3e6ee0` = สีแบบเลขฐาน 16, `rgba(r, g, b, 0.08)` = สีโปร่งใส 8%

### 6.2 ค่าพื้นฐาน

| โค้ด | คืออะไร | ทำไมต้องใช้ |
|---|---|---|
| `* { box-sizing: border-box; }` | ความกว้างรวม padding และขอบด้วย (`*` = ทุกแท็ก) | กำหนด `width: 100%` แล้วไม่ล้นจอ |
| `html { scroll-behavior: smooth; }` | เลื่อนแบบนุ่มนวล | กดเมนูแล้วเลื่อนไปสวย ๆ |
| `font-family: "Prompt", Arial, sans-serif;` | ฟอนต์สำรองเรียงลำดับ | โหลด Prompt ไม่ได้จะใช้ Arial |
| `line-height: 1.6` | ระยะห่างบรรทัด | ภาษาไทยมีสระบน-ล่าง ต้องเว้นมากหน่อย |
| `img { max-width: 100%; }` | รูปไม่กว้างเกินกล่อง | รูปไม่ล้นจอมือถือ |
| `.hidden { display: none !important; }` | ซ่อน (`!important` = ชนะกฎอื่น) | JS เพิ่ม/ลบ class นี้ |

### 6.3 เมนูติดด้านบน (เกณฑ์ sticky navbar)

```css
.topbar {
    position: sticky;
    top: 0;
    z-index: 20;
    display: flex;
    justify-content: space-between;
}
.top-actions {
    display: flex;
    margin-inline-start: auto;
}
```

| บรรทัด | ความหมาย |
|---|---|
| `position: sticky; top: 0;` | เลื่อนจนเมนูชนขอบบน ให้ติดอยู่ตรงนั้น **นี่คือหัวใจของเกณฑ์ sticky** |
| `z-index: 20` | ให้เมนูอยู่ชั้นบน ไม่ถูกเนื้อหาทับ |
| `display: flex` | เรียงลูก ๆ (โลโก้, เมนู, ปุ่ม) เป็นแถวนอน |
| `margin-inline-start: auto` | ดันกลุ่มปุ่มไปชิดขอบด้านท้าย: ภาษาทั่วไปชิดขวา ภาษาอาหรับชิดซ้ายให้อัตโนมัติ |

### 6.4 การจัดวาง: Flexbox กับ Grid

```css
.care-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
}
```

- `display: flex` = เรียงของเป็น **แถวเดียว** (เช่น รูป + ข้อความในการ์ดงานวิจัย)
- `display: grid` = เรียงเป็น **ตารางหลายคอลัมน์** (การ์ด 8 ใบ = 4 คอลัมน์ 2 แถว)
- `repeat(4, 1fr)` = 4 คอลัมน์กว้างเท่ากัน (`fr` = ส่วนแบ่งของที่ว่าง), `gap` = ระยะห่าง

### 6.5 หน้าต่างลอย (modal)

```css
.modal {
    position: fixed;
    inset: 0;
    z-index: 50;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(31, 42, 92, 0.45);
}
```

| บรรทัด | ความหมาย |
|---|---|
| `position: fixed` | ติดกับหน้าจอ ไม่เลื่อนตามหน้าเว็บ |
| `inset: 0` | ย่อของ `top: 0; right: 0; bottom: 0; left: 0;` = เต็มจอ |
| `z-index: 50` | สูงกว่าเมนู (20) จึงลอยทับทุกอย่าง |
| `align-items` + `justify-content: center` | วางกล่องไว้กลางจอทั้งแนวตั้งและแนวนอน |
| `rgba(..., 0.45)` | พื้นหลังสีน้ำเงินเข้มโปร่ง 45% ทำให้หน้าเว็บด้านหลังมืดลง |

### 6.6 ตารางบันทึก

| โค้ด | ความหมาย |
|---|---|
| `.table-wrap { max-height: 340px; overflow: auto; }` | ตารางสูงเกิน 340px หรือกว้างเกินจอ ให้เลื่อนในกรอบ ไม่ล้นหน้า |
| `border-collapse: collapse` | รวมเส้นขอบช่องติดกันเป็นเส้นเดียว |
| `.log-table th { position: sticky; top: 0; }` | หัวตารางติดอยู่ด้านบนตอนเลื่อนในกรอบ |
| `text-align: start` | ชิดด้าน "เริ่มต้น" ของภาษา (ไทยชิดซ้าย อาหรับชิดขวา) |

### 6.7 วงกลมคะแนนและวงกลมหายใจ

```css
.score-ring { border-radius: 50%; background: conic-gradient(var(--orange) 0%, #eef0f8 0%); }
.breathe-circle {
    transform: scale(1);
    transition-property: transform;
    transition-timing-function: ease-in-out;
}
```

- `conic-gradient` = สีไล่รอบวงเหมือนหน้าปัดนาฬิกา JS เปลี่ยนเป็นเช่น `ส้ม 60%, เทา 60%` → วงสีส้ม 60%
- `transform: scale(1.5)` = ขยาย 1.5 เท่า JS ตั้งเวลาเปลี่ยน (`transitionDuration`) เท่ากับวินาทีหายใจ วงกลมจึงค่อย ๆ ขยายพอดีจังหวะ
- `ease-in-out` = เริ่มช้า กลางเร็ว จบช้า เหมือนการหายใจจริง

### 6.8 ภาษาอาหรับ (อ่านขวาไปซ้าย)

```css
[dir="rtl"] .hero-image {
    mask-image: linear-gradient(to left, transparent, black 18%);
}
```

- เมื่อเลือกภาษาอาหรับ JS ตั้ง `<html dir="rtl">` เบราว์เซอร์จะกลับด้านการจัดวางเกือบทั้งหมดให้เอง
- กฎ `[dir="rtl"] ...` ใช้แก้จุดที่ต้องกลับเอง เช่น ทิศของการไล่สีจางที่ขอบรูป

### 6.9 Responsive (เกณฑ์คอม + มือถือ)

| จุดเปลี่ยน | อะไรเปลี่ยน |
|---|---|
| `@media (max-width: 1150px)` | ซ่อนเมนู แสดงปุ่ม ☰ (`order: 3` ย้ายไปขวาสุด) เมนูจะกางลงมาเมื่อ JS ใส่ class `open` |
| `@media (max-width: 960px)` | งานวิจัย, แผนบริการ, สายด่วน, ตัวหายใจ เหลือ 1 คอลัมน์ การ์ดดูแลตัวเองเหลือ 2 คอลัมน์ |
| `@media (max-width: 700px)` | ทุกอย่าง 1 คอลัมน์, ตัวเลขสรุปบันทึกเป็น 2×2, รูป hero ไปอยู่ใต้ข้อความ |
| `@media (max-width: 480px)` | ย่อแถบด้านบน: ซ่อนคำว่า StressCare, ย่อกล่องเลือกภาษาและปุ่มบัญชี ให้พอดีจอเล็ก |

**หลักจำ:** `@media (max-width: X)` = "ถ้าจอกว้างไม่เกิน X ให้ใช้กฎข้างในแทน" กฎที่เขียนทีหลังจะทับกฎที่เขียนก่อน จึงต้องวาง `@media` ไว้ท้ายไฟล์

---

### 6.10 กล่องเงื่อนไขที่โผล่ตอนชี้เมาส์ที่ ⓘ (tooltip)

```css
.info-wrap {
    position: relative;
    cursor: help;
}
.rule-tip {
    display: none;
    position: absolute;
    top: 50%;
    inset-inline-start: calc(100% + 10px);
    transform: translateY(-50%);
    width: max-content;
    max-width: 240px;
    pointer-events: none;
}
.info-wrap:hover .rule-tip,
.info-wrap:focus .rule-tip {
    display: block;
}
.rule-tip li::before { content: "○ "; }
.rule-tip li.ok::before { content: "✓ "; color: #7be0a8; }
```

| บรรทัด | ความหมาย |
|---|---|
| `display: none` | ซ่อนกล่องเงื่อนไขไว้ก่อน ตอนพิมพ์จึงไม่มีอะไรมาบังช่องกรอก |
| `.info-wrap:hover .rule-tip` | แสดงกล่อง **เฉพาะตอนเมาส์ชี้ที่ไอคอน ⓘ** (`:hover` = ตอนเมาส์ชี้) เลื่อนเมาส์ออกก็ซ่อน |
| `.info-wrap:focus .rule-tip` | แสดงเมื่อไอคอนได้ focus: กด Tab มาที่ ⓘ หรือแตะ ⓘ บนมือถือ (มือถือไม่มีเมาส์) |
| `cursor: help` | เมาส์เปลี่ยนเป็นรูปเครื่องหมายคำถาม บอกว่าตรงนี้มีคำอธิบาย |
| `position: relative` + `absolute` | วางกล่องลอยโดยอ้างอิงตำแหน่งไอคอน ⓘ |
| `inset-inline-start: calc(100% + 10px)` | ให้กล่องโผล่ **ข้างขวาของ ⓘ** ห่าง 10px (ภาษาอาหรับโผล่ข้างซ้ายให้เอง) |
| `top: 50%` + `transform: translateY(-50%)` | จัดกล่องให้อยู่กึ่งกลางแนวตั้งของไอคอน |
| `width: max-content; max-width: 240px` | กว้างพอดีข้อความ แต่ไม่เกิน 240px จะได้ไม่ล้นจอมือถือ |
| `pointer-events: none` | ให้คลิกทะลุกล่องได้ ไม่ขวางการกดช่องหรือปุ่มอื่น |
| `::before` + `content` | ใส่สัญลักษณ์หน้าข้อความ: ○ = ยังไม่ผ่าน, ✓ สีเขียว = ผ่านแล้ว (JS ใส่ class `ok`) |

### 6.11 กราฟ

| โค้ด | ความหมาย |
|---|---|
| `.progress-grid { grid-template-columns: 1fr 1fr; }` | กราฟคะแนนกับกราฟอารมณ์วางคู่กัน 2 คอลัมน์ (จอ ≤ 960px เหลือ 1 คอลัมน์) |
| `.chart { width: 100%; height: auto; }` | SVG ขยายเต็มกล่องและรักษาสัดส่วน |
| `.chart .axis { fill: var(--muted); }` | ตัวหนังสือใน SVG ใช้ `fill` (ไม่ใช่ `color`) กำหนดสี |
| `a.feature:hover { transform: translateY(-3px); }` | การ์ดจุดเด่นลอยขึ้นเมื่อชี้เมาส์ บอกว่ากดได้ |
| `.plan-button:disabled` | ปุ่มแผนปัจจุบันเป็นสีเขียว และกดซ้ำไม่ได้ |

## 7. อธิบาย script.js

JavaScript ทำให้เว็บ "ตอบสนอง" แนวคิดหลักมี 3 ขั้น: **หาแท็ก** → **รอฟังเหตุการณ์** (เช่น click) → **เปลี่ยนหน้าเว็บ** (เปลี่ยนข้อความ หรือเพิ่ม/ลบ class) ไฟล์แบ่งเป็น 11 ส่วน (ส่วนที่ 0–10) ดูได้จากคอมเมนต์ `// ===== ...`

### 7.0 คำพื้นฐานที่ใช้ทั้งไฟล์

| โค้ด | คืออะไร |
|---|---|
| `const x = ...` | ตัวแปรที่ไม่เปลี่ยนค่า (เช่น ปุ่มที่หามาแล้ว) |
| `let x = ...` | ตัวแปรที่เปลี่ยนค่าได้ (เช่น ข้อที่กำลังทำ) |
| `document.getElementById("x")` | หาแท็กที่มี `id="x"` |
| `document.querySelectorAll(".x")` | หาทุกแท็กที่มี class x ได้เป็นรายการ |
| `.addEventListener("click", function () {...})` | "เมื่อถูกคลิก ให้ทำคำสั่งในปีกกา" |
| `.classList.add / remove / toggle("x")` | ใส่ / เอาออก / สลับ class |
| `.textContent = "..."` | เปลี่ยนข้อความ (ปลอดภัย ไม่ตีความเป็น HTML) |
| `.innerHTML = "<b>...</b>"` | เปลี่ยนเนื้อหาเป็น HTML |
| `for (let i = 0; i < list.length; i++)` | วนทำซ้ำทีละตัวในรายการ |
| `function ชื่อ() {...}` | กลุ่มคำสั่งที่ตั้งชื่อไว้ เรียกใช้ซ้ำได้ |
| `[ ... ]` / `{ key: value }` | array = รายการเรียงลำดับ (นับจาก 0) / object = กล่องที่มีชื่อช่อง |
| `a ? b : c` | ถ้า a จริงใช้ b ไม่จริงใช้ c (if/else สั้น ๆ) |

### 7.1 ส่วนที่ 0: เครื่องมือช่วย

```js
function loadData(key, defaultValue) {
    try {
        const text = localStorage.getItem(key);
        if (text !== null) {
            return JSON.parse(text);
        }
    } catch (e) { }
    return defaultValue;
}

function saveData(key, value) {
    try {
        localStorage.setItem(key, JSON.stringify(value));
    } catch (e) { }
}

function fill(text, values) {
    for (const key in values) {
        text = text.split("{" + key + "}").join(values[key]);
    }
    return text;
}
```

| โค้ด | คืออะไร | ทำไมต้องใช้ |
|---|---|---|
| `localStorage` | ที่เก็บข้อมูลในเบราว์เซอร์ ปิดเว็บแล้วไม่หาย | เก็บบัญชี, บันทึก, ภาษาที่เลือก โดยไม่ต้องมีเซิร์ฟเวอร์ |
| `getItem` / `setItem` | อ่าน / เขียนตามชื่อ (key) | |
| `JSON.stringify` / `JSON.parse` | แปลง ข้อมูล → ข้อความ / ข้อความ → ข้อมูล | localStorage เก็บได้แค่ข้อความ |
| `try { } catch (e) { }` | ลองทำ ถ้าพังให้ข้ามไป | บางเบราว์เซอร์ (เช่น โหมดส่วนตัว) ไม่ให้ใช้ localStorage เว็บจะได้ไม่พังทั้งหน้า |
| `fill("สวัสดี {name}", {name: "mey"})` | เติมค่าลงในช่อง `{...}` ได้ "สวัสดี mey" | แต่ละภาษาเรียงคำไม่เหมือนกัน จึงเขียนประโยคเต็มในไฟล์ภาษา แล้วเติมค่าทีหลัง |
| `split(...).join(...)` | ตัดข้อความตรง `{name}` แล้วต่อกลับด้วยค่าจริง | เป็นวิธีแทนที่ข้อความทุกจุด |

### 7.2 ส่วนที่ 1: ภาษา

```js
let lang = loadData("hikariLang", "th");
if (!LANG[lang]) {
    lang = "th";
}

function t(key) {
    return LANG[lang].js[key];
}

function applyLanguage() {
    const pack = LANG[lang];
    document.documentElement.lang = lang;
    document.documentElement.dir = pack.dir;
    document.title = pack.html["page.title"];

    const textItems = document.querySelectorAll("[data-i18n]");
    for (let i = 0; i < textItems.length; i++) {
        textItems[i].innerHTML = pack.html[textItems[i].dataset.i18n];
    }
    ... (alt และ aria-label ทำแบบเดียวกัน)

    refreshQuiz();
    refreshMood();
    refreshBreathing();
    updatePrice();
    updateAccountUI();
    renderLog();
}

langSelect.addEventListener("change", function () {
    lang = langSelect.value;
    saveData("hikariLang", lang);
    applyLanguage();
});
```

| บรรทัด | ความหมาย |
|---|---|
| `loadData("hikariLang", "th")` | อ่านภาษาที่เคยเลือก ถ้าไม่เคยเลือกใช้ไทย |
| `if (!LANG[lang])` | กันกรณีค่าแปลก ๆ ถ้าไม่มีภาษานั้นให้กลับเป็นไทย (`!` = ไม่) |
| `t("next")` | ฟังก์ชันสั้น ๆ ดึงข้อความของ script.js ในภาษาปัจจุบัน |
| `document.documentElement` | แท็ก `<html>` |
| `.dir = pack.dir` | `"ltr"` ซ้ายไปขวา หรือ `"rtl"` ขวาไปซ้าย (อาหรับ) |
| `querySelectorAll("[data-i18n]")` | หาทุกแท็กที่มีป้าย data-i18n (`[...]` = หาตาม attribute) |
| `dataset.i18n` | อ่านค่าป้าย เช่น `"header.2"` แล้วไปหาคำแปลใน `pack.html["header.2"]` |
| `refreshQuiz()` ... `renderLog()` | ข้อความที่ JS สร้างเอง (คำถาม, ผล, ตัวจับเวลา, ตาราง) ต้องวาดใหม่ในภาษาใหม่ |
| `"change"` | เหตุการณ์เมื่อเลือกค่าใหม่ใน `<select>` |

### 7.3 ส่วนที่ 2: เข้าสู่ระบบ / สมัครสมาชิก

**เงื่อนไขชื่อผู้ใช้และรหัสผ่าน**

```js
function userChecks(name) {
    return {
        uchars: name.length > 0 && /^[a-z0-9]+$/.test(name),
        ulen: name.length >= 5 && name.length <= 30
    };
}

function passChecks(pw) {
    return {
        plen: pw.length >= 8,
        plower: /[a-z]/.test(pw),
        pupper: /[A-Z]/.test(pw),
        pdigit: /[0-9]/.test(pw),
        pspecial: /[^A-Za-z0-9]/.test(pw)
    };
}

function allPassed(checks) {
    for (const key in checks) {
        if (!checks[key]) {
            return false;
        }
    }
    return true;
}
```

| โค้ด | ความหมาย |
|---|---|
| ฟังก์ชันคืนค่าเป็น object ของ true/false | 1 ช่อง = 1 เงื่อนไข ใช้ได้ทั้งตอนใส่ ✓ ในกล่องเงื่อนไข และตอนตรวจก่อนส่ง (เขียนกฎที่เดียว) |
| `/^[a-z0-9]+$/` | **regex**: `^` ต้นข้อความ, `[a-z0-9]` ตัวที่อนุญาต, `+` อย่างน้อย 1 ตัว, `$` ท้ายข้อความ = ทั้งชื่อต้องเป็น a–z หรือ 0–9 เท่านั้น |
| `/[A-Z]/.test(pw)` | มีตัวพิมพ์ใหญ่ **อย่างน้อย 1 ตัว** ที่ไหนก็ได้ในรหัส (ไม่มี `^...$` จึงหาแค่บางส่วน) |
| `/[^A-Za-z0-9]/` | `^` ที่อยู่**ใน**วงเล็บเหลี่ยม แปลว่า "ไม่ใช่" = ตัวที่ไม่ใช่ตัวอักษรหรือตัวเลข = อักขระพิเศษ |
| `allPassed` | วนดูทุกเงื่อนไข ถ้ามีข้อไหนเป็น false คืนค่า false ทันที |

**ใส่ ✓ ขณะพิมพ์**

```js
function updateRuleMarks() {
    const checks = Object.assign(userChecks(authUser.value), passChecks(authPass.value));
    const items = document.querySelectorAll(".rule-tip li");
    for (let i = 0; i < items.length; i++) {
        items[i].classList.toggle("ok", checks[items[i].dataset.rule]);
    }
}

authUser.addEventListener("input", function () {
    authUser.value = authUser.value.toLowerCase();
    updateRuleMarks();
});
authPass.addEventListener("input", updateRuleMarks);
```

- `"input"` = เหตุการณ์ทุกครั้งที่พิมพ์/ลบตัวอักษร
- `Object.assign(a, b)` = รวม object สองก้อนเป็นก้อนเดียว จะได้หาเงื่อนไขทุกข้อด้วย `checks["pupper"]`
- `classList.toggle("ok", true/false)` = ถ้าค่าที่ 2 เป็น true ใส่ class, false เอาออก
- ชื่อผู้ใช้ถูกแปลงเป็นตัวเล็กทันทีที่พิมพ์ ผู้ใช้จึงเห็นชัดว่าเว็บใช้ตัวเล็กเท่านั้น

**แปลงรหัสผ่านเป็นค่า hash**

```js
async function hashPassword(username, password) {
    const text = username + ":" + password;
    if (window.crypto && crypto.subtle) {
        const bytes = new TextEncoder().encode(text);
        const buffer = await crypto.subtle.digest("SHA-256", bytes);
        const list = Array.from(new Uint8Array(buffer));
        return list.map(function (b) { return b.toString(16).padStart(2, "0"); }).join("");
    }
    ... (สำรอง: hash แบบง่าย djb2)
}
```

| บรรทัด | ความหมาย | ทำไม |
|---|---|---|
| hash คืออะไร | แปลงข้อความเป็นรหัสยาว ๆ แบบ **ทางเดียว** ย้อนกลับเป็นรหัสผ่านเดิมไม่ได้ | ไม่เก็บรหัสผ่านจริง เปิดดู localStorage ก็ไม่เห็นรหัส |
| `username + ":" + password` | ผสมชื่อผู้ใช้ด้วย | สองคนใช้รหัสเดียวกัน ค่า hash ก็ไม่เหมือนกัน |
| `async` / `await` | ฟังก์ชันที่ต้อง "รอ" ผลลัพธ์ | `crypto.subtle.digest` ใช้เวลาคำนวณ |
| `crypto.subtle.digest("SHA-256", ...)` | ฟังก์ชัน hash มาตรฐานที่มีในเบราว์เซอร์ | มาตรฐานที่ใช้ทั่วโลก |
| `toString(16).padStart(2, "0")` | แปลงแต่ละ byte เป็นเลขฐาน 16 สองหลัก | ได้ข้อความยาว 64 ตัว |

**ส่งฟอร์ม**

```js
authForm.addEventListener("submit", async function (event) {
    event.preventDefault();
    const username = authUser.value.trim().toLowerCase();
    const password = authPass.value;

    if (!allPassed(userChecks(username))) {
        authMessage.textContent = t("errUser");
        return;
    }
    if (!allPassed(passChecks(password))) {
        authMessage.textContent = t("errPass");
        return;
    }
    const users = loadData("hikariUsers", {});
    const hash = await hashPassword(username, password);

    if (authMode === "register") {
        if (users[username]) { ... ชื่อซ้ำ ... }
        users[username] = { hash: hash, created: new Date().toISOString(), plan: "free", loginCount: 0 };
        saveData("hikariUsers", users);
        loginAs(username, "register");
    } else {
        if (!users[username] || users[username].hash !== hash) { ... ผิด ... }
        loginAs(username, "login");
    }
});
```

| บรรทัด | ความหมาย |
|---|---|
| `event.preventDefault()` | ห้ามเบราว์เซอร์โหลดหน้าใหม่ (ค่าเริ่มต้นของฟอร์ม) |
| `.trim().toLowerCase()` | ตัดช่องว่างหัวท้าย และแปลงเป็นตัวเล็ก |
| ตรวจเงื่อนไขก่อน hash | ไม่ผ่านเงื่อนไขข้อใด ขึ้นข้อความแดงบอกให้ชี้เมาส์ดูเงื่อนไข |
| บัญชีใหม่ | เก็บ `hash`, วันที่สร้าง, **`plan: "free"`** (สมาชิกใหม่เริ่มที่ Free) และ `loginCount` |
| เข้าสู่ระบบผิด | ไม่บอกว่าผิดที่ชื่อหรือรหัส เพื่อไม่ให้เดาชื่อผู้ใช้ได้ |

**เข้าสู่ระบบ: นับครั้ง + เวลาล่าสุด + บันทึก log**

```js
function loginAs(username, logType) {
    const users = loadData("hikariUsers", {});
    users[username].loginCount = (users[username].loginCount || 0) + 1;
    users[username].lastLogin = new Date().toISOString();
    saveData("hikariUsers", users);

    currentUser = username;
    saveData("hikariCurrentUser", currentUser);
    addLog(logType, {});
    ...
}
```

- ทุกครั้งที่เข้าสู่ระบบ: บวกจำนวนครั้ง (`|| 0` = ถ้ายังไม่มีค่าให้เริ่มที่ 0), จำเวลาล่าสุด และ `addLog` ซึ่งเก็บ **ชื่อผู้ใช้ + เวลา + สถานะสมาชิก** (ดู 7.4)
- ออกจากระบบ: `addLog("logout")` **ก่อน** ล้างชื่อ เพราะหลังล้างจะไม่รู้ว่าเป็นใคร
- ปุ่มมุมขวาแสดง `👤 ชื่อ · แผน` แยกชื่อกับแผนเป็น 2 ส่วน ชื่อยาวจะถูกตัดเป็น ... แต่แผนยังเห็นเสมอ (มือถือแสดงแค่ 👤 + แผน)
- ปิดหน้าต่างได้ 3 วิธี: ปุ่ม ×, กด `Esc`, กดพื้นหลังสีเทา (`event.target === authModal`)

### 7.4 ส่วนที่ 3: บันทึกกิจกรรม (log) + กราฟความเปลี่ยนแปลง

**เพิ่ม 1 รายการ: เวลา + ชื่อผู้ใช้ + สถานะ + กิจกรรม**

```js
function currentPlan() {
    return currentAccount().plan || "free";
}

function addLog(type, data) {
    if (!currentUser) {
        return;
    }
    const log = loadData(logKey(), []);
    log.push({
        time: new Date().toISOString(),
        user: currentUser,
        plan: currentPlan(),
        type: type,
        data: data
    });
    while (log.length > 300) {
        log.shift();
    }
    saveData(logKey(), log);
    renderLog();
}
```

| ช่อง | ตัวอย่าง | ความหมาย |
|---|---|---|
| `time` | `2026-10-15T08:16:00.000Z` | เวลาแบบมาตรฐาน แสดงตามรูปแบบของแต่ละภาษาตอนวาดตาราง |
| `user` | `mey12345` | ชื่อผู้ใช้ที่ทำกิจกรรม |
| `plan` | `free` / `premium` / `careplus` | **สถานะสมาชิกในตอนนั้น** (ถ้าเปลี่ยนแผนภายหลัง รายการเก่ายังเป็นค่าเดิม เป็นประวัติที่ถูกต้อง) |
| `type` | `login`, `assessment`, ... | ชนิดกิจกรรม |
| `data` | `{ score: 10, level: 2 }` | ข้อมูลประกอบ เก็บเป็นตัวเลข/รหัส แล้วแปลภาษาตอนแสดงผล |

- แยก log ตามผู้ใช้ด้วย key `"hikariLog_" + currentUser` และเก็บ 300 รายการล่าสุด (`shift()` ลบตัวเก่าสุด)
- `PLAN_NAMES = { free: "Free", premium: "Premium", careplus: "Care+" }` เป็นชื่อแบรนด์ จึงเหมือนกันทุกภาษา

**ชนิดกิจกรรมที่บันทึก**

| type | เกิดเมื่อ | data |
|---|---|---|
| `register` | สมัครสมาชิก | - |
| `login` / `logout` | เข้า / ออกจากระบบ **ทุกครั้ง** | - |
| `assessment` | ทำแบบประเมินครบ 18 ข้อ | `score` (0–15), `level` (0–3) |
| `breathing` | ฝึกหายใจจนครบเวลา | `pattern`, `minutes` |
| `mood` | แตะอารมณ์ (จอแอปหรือช่องบันทึกอารมณ์) | `mood` |
| `plan` | เปลี่ยนแผนสมาชิก | `from`, `to` |

**ตัวกรองตาราง**

```js
const LOG_FILTERS = {
    all: null,
    access: ["register", "login", "logout"],
    assessment: ["assessment"],
    ...
};
...
if (allowed && allowed.indexOf(log[i].type) === -1) {
    continue;
}
```

- เลือกตัวกรอง "เข้า/ออกระบบ" จะเห็นเฉพาะประวัติการเข้าสู่ระบบ (ชื่อผู้ใช้ เวลา สถานะ)
- `indexOf(...) === -1` = ไม่พบในรายการ → `continue` ข้ามไปแถวถัดไป
- `all: null` = ไม่กรอง แสดงทุกแถว

**แสดงตาราง:** วนจากท้ายไปหน้า (`i--`) รายการใหม่สุดจึงอยู่บนสุด ฟังก์ชัน `logCells()` แปลง 1 รายการเป็น 5 ช่อง ใช้ร่วมกันทั้งตารางและไฟล์ CSV และใส่ข้อความด้วย `textContent` (ปลอดภัย ไม่ตีความเป็น HTML)

**ข้อความใต้ชื่อ:** `"เข้าสู่ระบบทั้งหมด {n} ครั้ง · ล่าสุด {time}"` อ่านจาก `loginCount` และ `lastLogin` ในบัญชี

**กราฟเส้นคะแนนความเครียด (renderScoreChart)**

```js
const scores = log.filter(function (e) { return e.type === "assessment"; }).slice(-10);
const left = 30, right = 310, top = 24, bottom = 140;
function y(score) { return bottom - score / 15 * (bottom - top); }
...
html += '<polyline fill="none" stroke="#3e6ee0" stroke-width="3" points="' + ... + '"/>';
html += '<circle cx="' + p.x + '" cy="' + p.y + '" r="5" fill="#3e6ee0"/>';
...
svg.innerHTML = html;
```

| โค้ด | ความหมาย |
|---|---|
| `filter(...)` | เลือกเฉพาะรายการที่เป็นการประเมิน |
| `slice(-10)` | เอา 10 รายการสุดท้าย (ล่าสุด) |
| `y(score)` | แปลงคะแนนเป็นตำแหน่งแนวตั้ง: คะแนน 15 อยู่บนสุด (y = 24), 0 อยู่ล่างสุด (y = 140) เพราะใน SVG ค่า y ยิ่งมากยิ่งอยู่ล่าง |
| แถบสีพื้นหลัง `<rect>` 4 แถบ | เขียว (ต่ำ 0–3), เหลือง (ปานกลาง), ส้ม (ค่อนข้างสูง), ชมพู (สูง 11–15) ดูแวบเดียวรู้ว่าอยู่ระดับไหน |
| `<polyline points="x1,y1 x2,y2 ...">` | เส้นที่ลากผ่านทุกจุด |
| `<circle>` + `<text>` | จุดของแต่ละครั้ง พร้อมตัวเลขคะแนนเหนือจุด และวันที่ใต้กราฟ |
| สรุปใต้กราฟ | เทียบครั้งแรกกับครั้งล่าสุด: ลดลง = 🎉 ดีขึ้น, เพิ่มขึ้น = 📈 แนะนำวิธีดูแลตัวเอง, เท่ากัน = ➖ |

**กราฟแท่งอารมณ์ 7 วัน (renderMoodChart)**

```js
const MOOD_VALUE = { very: 1, stressed: 2, ok: 3, good: 4, great: 5 };
for (let d = 6; d >= 0; d--) {
    const day = new Date();
    day.setDate(day.getDate() - d);
    ... หาอารมณ์ล่าสุดของวันนั้น ...
    const h = MOOD_VALUE[mood] / 5 * maxHeight;
    html += '<rect ... height="' + h + '" fill="' + MOOD_COLOR[mood] + '"/>';
}
```

- วนย้อนหลัง 6 วันจนถึงวันนี้ (`setDate(getDate() - d)` = ถอยวันที่ไป d วัน)
- แต่ละวันใช้อารมณ์ **ล่าสุด** ของวันนั้น แปลงเป็นค่า 1–5 แล้วทำเป็นความสูงแท่ง: ยิ่งอารมณ์ดีแท่งยิ่งสูงและเป็นสีเขียว วันที่ไม่ได้บันทึกเป็นขีดสีเทา
- ใต้แท่งเป็นชื่อวันแบบย่อตามภาษา (`toLocaleDateString(..., { weekday: "short" })`)
- สรุป: นับว่าอารมณ์ไหนถูกบันทึกบ่อยที่สุดใน 7 วัน

**ดาวน์โหลด CSV**

```js
const file = new Blob(["\ufeff" + csv], { type: "text/csv;charset=utf-8" });
const link = document.createElement("a");
link.href = URL.createObjectURL(file);
link.download = "hikari-log-" + currentUser + ".csv";
link.click();
```

| โค้ด | ความหมาย |
|---|---|
| CSV | ไฟล์ตารางแบบข้อความ คั่นช่องด้วย `,` เปิดใน Excel / Google Sheets ได้ มี 5 คอลัมน์ตรงกับตาราง |
| `'"' + ... + '"'` และ `split('"').join('""')` | ครอบทุกช่องด้วย `"` และเปลี่ยน `"` ข้างในเป็น `""` ตามกฎ CSV |
| `\ufeff` (BOM) | บอกว่าเป็น UTF-8 ทำให้ Excel อ่านภาษาไทยไม่เพี้ยน |
| `Blob` + `createObjectURL` + `<a download>` + `click()` | สร้างไฟล์ในเบราว์เซอร์ แล้วกดลิงก์ให้อัตโนมัติ = ดาวน์โหลด |

**ลบบันทึก:** กดครั้งแรกปุ่มเปลี่ยนเป็น "กดอีกครั้งเพื่อยืนยัน" (`setTimeout` 3 วินาทีให้กลับเป็นปกติ) กดซ้ำภายใน 3 วินาทีจึงลบ กันกดพลาด

### 7.5 ส่วนที่ 4: เมนูบนมือถือ

```js
menuButton.addEventListener("click", function () {
    navLinks.classList.toggle("open");
});
```

กด ☰ → `toggle("open")` สลับเปิด/ปิด (CSS `.nav-links.open { display: flex; }` ทำให้เห็น) และกดลิงก์ใดก็ได้ในเมนูจะปิดเมนู ไม่ให้บังเนื้อหา

### 7.6 ส่วนที่ 5: แบบประเมิน 18 ข้อ

```js
const questionFactors = [
    "general", "general", "general", "general", "general", "general",
    "work", "work", "work",
    "money", "money", "money",
    "sleep", "sleep", "sleep",
    "relation", "relation", "relation"
];
const choiceEmojis = ["😄", "🙂", "😟", "😣"];
```

- **ข้อความคำถามอยู่ในไฟล์ภาษา** (`t("questions")`) ส่วน script.js เก็บแค่ "หมวด" ของแต่ละข้อตามลำดับเดียวกัน
- คะแนนของคำตอบ = ลำดับของปุ่ม (0, 1, 2, 3) จึงไม่ต้องเก็บคะแนนแยก

**คำนวณ (calculate)**

| ขั้น | โค้ด | ความหมาย |
|---|---|---|
| รวมคะแนน | `total = total + answers[i]` | 18 ข้อ × สูงสุด 3 = เต็ม 54 |
| แปลงเต็ม 15 | `Math.round(total / 54 * 15)` | เช่น 36 → 36/54×15 = 10 (`Math.round` = ปัดเศษ) |
| ระดับ | `if (score <= 3) level = 0; else if (score <= 6) ...` | 0–3 ต่ำ, 4–6 ปานกลาง, 7–10 ค่อนข้างสูง, 11–15 สูง เก็บเป็นตัวเลข 0–3 แปลงเป็นคำตอนแสดงผล |
| ปัจจัย | `sums[f] = sums[f] + answers[i]` | รวมคะแนนแยกหมวด (ข้าม general) หมวดละ 3 ข้อ เต็ม 9 → แปลงเป็น % |
| เรียง | `list.sort(function (a, b) { return b.percent - a.percent; })` | เรียงจากมากไปน้อย หยิบ 2 หมวดแรกเป็นคำแนะนำ |

**แยก showResult กับ renderResult:** `showResult()` เรียกครั้งเดียวตอนตอบครบ (บันทึกผล + log) ส่วน `renderResult()` แค่วาดหน้าผล เรียกซ้ำได้ตอนเปลี่ยนภาษาโดย **ไม่บันทึกซ้ำ**

**ผลย้อนหลัง:** `historyKey()` = `"hikariHistory_" + (currentUser || "guest")` แยกตามผู้ใช้ ยังไม่เข้าระบบใช้ `guest` (`||` = ถ้าซ้ายไม่มีค่าใช้ขวา) เก็บ 5 ครั้งล่าสุดแล้วเทียบ 2 ครั้งล่าสุด: ลดลง 🎉 / เพิ่มขึ้น 📈 / เท่าเดิม ➖

### 7.7 ส่วนที่ 6–7: การ์ดดูแลตัวเอง และเลือกอารมณ์

```js
const steps = arrowButtons[i].nextElementSibling;
steps.classList.toggle("hidden");
```

- `nextElementSibling` = แท็กถัดจากปุ่ม คือ `<p class="care-steps">` ของการ์ดใบเดียวกัน กดแล้วสลับซ่อน/แสดง

```js
const moodButtons = document.querySelectorAll(".mood-button");
...
moodButtons[i].addEventListener("click", function () {
    selectedMood = moodButtons[i].dataset.mood;
    for (let j = 0; j < moodButtons.length; j++) {
        moodButtons[j].classList.toggle("selected", moodButtons[j].dataset.mood === selectedMood);
    }
    addLog("mood", { mood: selectedMood });
    refreshMood();
});
```

- ปุ่มอารมณ์มี 2 ที่ (จอแอปตัวอย่าง + ช่องบันทึกอารมณ์ในกราฟ) ใช้ class เดียวกัน จึงได้ทั้งหมดในครั้งเดียว
- กดที่ไหนก็ไฮไลต์อารมณ์เดียวกันทั้ง 2 ที่ บันทึกลง log แล้ว `renderLog()` วาดกราฟอารมณ์ใหม่ทันที
- ชื่ออารมณ์ใต้ emoji ในช่องบันทึกอารมณ์ดึงจาก `t("moodNames")` จึงเปลี่ยนตามภาษา

### 7.8 ส่วนที่ 8: ตัวจับเวลาฝึกหายใจ

```js
const patterns = {
    relax: [
        { phase: "inhale", seconds: 4, scale: 1.5 },
        { phase: "hold", seconds: 4, scale: 1.5 },
        { phase: "exhale", seconds: 6, scale: 1 }
    ],
    ...
};

function startPhase() {
    const step = patterns[patternName][phaseIndex];
    phaseLeft = step.seconds;
    breathePhase.textContent = t("phases")[step.phase];
    breatheCircle.style.transitionDuration = step.seconds + "s";
    breatheCircle.style.transform = "scale(" + step.scale + ")";
}

function tick() {
    totalLeft = totalLeft - 1;
    phaseLeft = phaseLeft - 1;
    if (totalLeft <= 0) {
        addBreatheCount();
        addLog("breathing", { pattern: patternName, minutes: minutes });
        stopBreathing("done");
        return;
    }
    if (phaseLeft <= 0) {
        phaseIndex = (phaseIndex + 1) % patterns[patternName].length;
        startPhase();
    }
    ...
}

timer = setInterval(tick, 1000);
```

| โค้ด | ความหมาย |
|---|---|
| `phase: "inhale"` | เก็บชนิดช่วงเป็นคำกลาง แล้วแปลด้วย `t("phases")` ตามภาษา |
| `transitionDuration = step.seconds + "s"` | ให้การขยาย/หดใช้เวลาเท่ากับช่วงหายใจ **นี่คือเคล็ดลับที่ทำให้วงกลมขยายพอดีจังหวะ** |
| `setInterval(tick, 1000)` | เรียก `tick` ทุก 1000 มิลลิวินาที (1 วินาที) |
| `(phaseIndex + 1) % length` | `%` = หารเอาเศษ ช่วงสุดท้ายบวก 1 แล้ววนกลับเป็น 0 |
| `clearInterval(timer)` | หยุดตัวจับเวลา **ต้องมี** ไม่งั้นนับไม่หยุด |
| `breatheState` | `ready` / `running` / `paused` / `done` จำสถานะไว้ เพื่อเปลี่ยนภาษาแล้วแสดงข้อความถูก |
| `todayKey()` | `"hikariBreathe_" + ผู้ใช้ + "_" + วันที่` ขึ้นวันใหม่ key เปลี่ยน ตัวนับเริ่ม 0 เอง |

### 7.9 ส่วนที่ 9: แผนบริการ (ราคา + เลือกแผน)

```js
let price = (billing === "month") ? 99 : 790;
if (studentCheck.checked) {
    price = Math.round(price / 2);
}
```

รายเดือน ฿99 รายปี ฿790 ติ๊กนักศึกษาหาร 2 (790 → 395) `"change"` = เหตุการณ์เมื่อติ๊ก/เอาติ๊กออก

```js
planButtons[i].addEventListener("click", function () {
    if (!currentUser) {
        planMessage.textContent = t("needLogin");
        openAuth("login");
        return;
    }
    const users = loadData("hikariUsers", {});
    const from = users[currentUser].plan || "free";
    const to = planButtons[i].dataset.plan;
    users[currentUser].plan = to;
    saveData("hikariUsers", users);
    addLog("plan", { from: from, to: to });
    ...
});
```

- ยังไม่เข้าสู่ระบบ → แจ้งให้เข้าก่อน และเปิดหน้าต่างเข้าสู่ระบบให้
- เข้าแล้ว → เก็บแผนใหม่ในบัญชี และบันทึก log "เปลี่ยนแผน Free → Premium"
- `refreshPlanButtons()` ทำให้ปุ่มของแผนปัจจุบันเป็น "✓ แผนปัจจุบัน" และ `disabled` (กดซ้ำไม่ได้)
- **เป็นการจำลอง ไม่มีการชำระเงินจริง** ใช้เพื่อแสดงสถานะสมาชิกใน log ตามโมเดลธุรกิจ Free / Premium / Care+

### 7.10 ส่วนที่ 10: เริ่มทำงาน

```js
applyLanguage();
```

บรรทัดสุดท้ายเรียก `applyLanguage()` ครั้งเดียว ซึ่งจะใส่ข้อความภาษาที่เลือก แสดงคำถามข้อ 1 ตั้งค่าตัวจับเวลา ราคา ปุ่มบัญชี และตารางบันทึก ทั้งหมดในคราวเดียว

---

## 8. อธิบายไฟล์ภาษา (lang/)

แต่ละไฟล์หน้าตาแบบนี้:

```js
window.LANG = window.LANG || {};
LANG.en = {
    "name": "English",
    "dir": "ltr",
    "html": {
        "header.2": "Assessment",
        "home.1": "Stress...<br>you don't have to face it alone",
        ...
    },
    "js": {
        "locale": "en-US",
        "questions": [ "How often do you feel stressed or worried?", ... ],
        "next": "Next →",
        "hello": "Hello {name} 👋",
        ...
    }
};
```

| ส่วน | ความหมาย |
|---|---|
| `window.LANG = window.LANG \|\| {}` | ถ้ายังไม่มีกล่อง LANG ให้สร้าง ถ้ามีแล้วใช้ของเดิม ทุกไฟล์จึงเติมภาษาของตัวเองลงกล่องเดียวกันได้ |
| `dir` | `ltr` หรือ `rtl` (อาหรับ) |
| `html` | ข้อความในหน้าเว็บ จับคู่กับ `data-i18n="..."` ใน index.html (200 ข้อความ) |
| `js` | ข้อความที่ script.js ใช้ เช่น คำถาม 18 ข้อ ข้อความ error ชื่อกิจกรรมใน log |
| `locale` | รูปแบบวันที่/เวลาของภาษานั้น เช่น `th-TH`, `ja-JP` |

**10 ภาษา:** ไทย (th), English (en), 中文 (zh), हिन्दी (hi), Español (es), Français (fr), العربية (ar), Português (pt), Русский (ru), 日本語 (ja) เป็นภาษาที่มีผู้ใช้มากระดับต้นของโลก รวมภาษาไทยของผู้ใช้หลัก

**อยากเพิ่มภาษาที่ 11:** คัดลอก `lang/en.js` เป็นไฟล์ใหม่ เช่น `lang/ko.js` → เปลี่ยน `LANG.en` เป็น `LANG.ko` และแปลข้อความ → เพิ่ม `<script src="lang/ko.js">` ใน index.html (ก่อน script.js) → เพิ่ม `<option value="ko">🌐 한국어</option>` ใน `<select>`

> คำแปลภาษาอื่นนอกจากไทยและอังกฤษ ควรให้ผู้ที่ใช้ภาษานั้นช่วยตรวจอีกครั้งก่อนใช้งานจริง

---

## 9. ระบบ Login: ทำงานอย่างไร และข้อจำกัด

### ข้อมูลที่เก็บใน localStorage

| key | เก็บอะไร |
|---|---|
| `hikariUsers` | บัญชีทั้งหมด `{ ชื่อผู้ใช้: { hash, created, plan, loginCount, lastLogin } }` |
| `hikariCurrentUser` | ชื่อผู้ใช้ที่เข้าอยู่ |
| `hikariLog_ชื่อผู้ใช้` | บันทึกกิจกรรมของแต่ละคน (สูงสุด 300 รายการ) แต่ละรายการมี เวลา, ชื่อผู้ใช้, สถานะ, กิจกรรม, ข้อมูลประกอบ |
| `hikariHistory_ชื่อผู้ใช้` | คะแนนประเมิน 5 ครั้งล่าสุด (ใช้ในหน้าผลประเมิน) |
| `hikariBreathe_ชื่อผู้ใช้_วันที่` | จำนวนครั้งที่ฝึกหายใจครบในวันนั้น |
| `hikariLang` | ภาษาที่เลือก |

ดูข้อมูลจริงได้: กด F12 → แท็บ **Application** → **Local Storage** → เลือกที่อยู่เว็บ

> บัญชีที่สมัครไว้ก่อนเปลี่ยนเงื่อนไข (เช่น ชื่อสั้นกว่า 5 ตัว หรือรหัสไม่มีตัวพิมพ์ใหญ่) จะเข้าสู่ระบบไม่ได้แล้ว ให้สมัครใหม่ตามเงื่อนไขใหม่

### ข้อจำกัด (ควรบอกผู้ตรวจตรง ๆ)

- เป็น **ต้นแบบที่ทำงานในเครื่อง** ตามที่โจทย์กำหนด (เว็บต้องทำงาน locally) จึงไม่มีเซิร์ฟเวอร์
- บัญชีอยู่ในเบราว์เซอร์เครื่องเดียว: เปิดจากเครื่องอื่นหรือเบราว์เซอร์อื่นจะไม่เห็นบัญชี
- คนที่ใช้เครื่องเดียวกันสามารถเปิด localStorage ดูบันทึกได้ (เห็นแค่ hash ไม่เห็นรหัสผ่าน) จึง **ไม่ใช่ระบบรักษาความปลอดภัยจริง**
- ถ้าจะใช้จริง ต้องย้ายไปเก็บบนเซิร์ฟเวอร์ (เช่น Firebase / Supabase) ใช้ HTTPS, hash รหัสผ่านฝั่งเซิร์ฟเวอร์ด้วย bcrypt/argon2 และทำตาม PDPA เพราะข้อมูลสุขภาพจิตเป็นข้อมูลอ่อนไหว

---

## 10. คำถามที่ผู้ตรวจอาจถาม

| คำถาม | ตอบสั้น ๆ |
|---|---|
| เมนูติดด้านบนได้อย่างไร? | CSS `position: sticky; top: 0;` ที่ `.topbar` |
| ทำไมบนมือถือเมนูกลายเป็นปุ่ม ☰? | `@media (max-width: 1150px)` ซ่อนเมนูและแสดงปุ่ม แล้ว JS สลับ class `open` เมื่อกด |
| เปลี่ยนภาษาทำอย่างไร? | ทุกข้อความมีป้าย `data-i18n` JS วนหาทุกป้ายแล้วใส่คำแปลจาก `LANG[ภาษา].html` และตั้ง `dir="rtl"` ให้ภาษาอาหรับ |
| ทำไมแยกข้อความภาษาไว้ในไฟล์ lang? | เพิ่ม/แก้คำแปลได้โดยไม่ต้องแตะโค้ด และ script.js สั้นลง |
| การ์ด "เห็นความเปลี่ยนแปลง" ใช้งานตรงไหน? | กดแล้วไปที่ "บันทึกของฉัน" ซึ่งมีกราฟคะแนนความเครียด 10 ครั้งล่าสุด และกราฟอารมณ์ 7 วัน วาดด้วย SVG จากข้อมูลใน log |
| เงื่อนไขชื่อผู้ใช้/รหัสผ่านตรวจอย่างไร? | ใช้ regex เช่น `/^[a-z0-9]+$/`, `/[A-Z]/`, `/[^A-Za-z0-9]/` ตรวจทีละข้อ แสดงในกล่องที่โผล่เฉพาะตอนชี้เมาส์ที่ ⓘ (`.info-wrap:hover`) และใส่ ✓ ตามที่พิมพ์ |
| Log การเข้าสู่ระบบเก็บอะไร? | ทุกครั้งที่สมัคร/เข้า/ออก เก็บเวลา ชื่อผู้ใช้ และสถานะสมาชิก (Free/Premium/Care+) ดูได้ด้วยตัวกรอง "เข้า/ออกระบบ" และดาวน์โหลด CSV |
| สถานะ Premium / Care+ ได้มาอย่างไร? | กด "เลือกแผนนี้" ในส่วนแผนบริการ (จำลอง ไม่จ่ายเงินจริง) ค่าเก็บใน `plan` ของบัญชี และทุกรายการ log จะบันทึกสถานะ ณ ตอนนั้น |
| Login เก็บรหัสผ่านอย่างไร? | ไม่เก็บรหัสจริง แปลงเป็น SHA-256 hash (ผสมชื่อผู้ใช้) ด้วย `crypto.subtle` แล้วเก็บใน localStorage ตอนเข้าระบบก็ hash ใหม่แล้วเทียบกัน |
| Log เก็บอะไร เก็บที่ไหน? | สมัคร/เข้า/ออก, ผลประเมิน, ฝึกหายใจ, อารมณ์, เปลี่ยนแผน ทุกรายการมีเวลา ชื่อผู้ใช้ สถานะ เก็บแยกตามผู้ใช้ใน `localStorage` key `hikariLog_ชื่อ` สูงสุด 300 รายการ ดาวน์โหลดเป็น CSV ได้ |
| ทำไมเปลี่ยนภาษาแล้วตาราง log เปลี่ยนตามได้? | เก็บเป็นรหัส (type + ตัวเลข) ไม่เก็บข้อความ แล้วแปลตอนแสดงผล |
| คะแนนคำนวณยังไง? | 18 ข้อ ข้อละ 0–3 เต็ม 54 แปลงเป็นเต็ม 15 ด้วย `Math.round(total / 54 * 15)` |
| วงกลมหายใจขยายช้า ๆ ได้ยังไง? | JS ตั้ง `transitionDuration` = วินาทีของช่วง แล้วเปลี่ยน `transform: scale()` CSS ทำภาพเคลื่อนไหวให้ ส่วน `setInterval` นับถอยหลังทุกวินาที |
| เว็บนี้วินิจฉัยโรคได้ไหม? | ไม่ได้ เป็นการสำรวจตัวเองเบื้องต้น คะแนนสูงจะแนะนำสายด่วน 1323 |
| ระบบ login นี้ปลอดภัยไหม? | เป็นต้นแบบในเครื่อง ไม่ส่งข้อมูลออก แต่ไม่ใช่ความปลอดภัยระดับใช้งานจริง (ดูข้อ 9) |
| แบ่งงานกันอย่างไร? | ตอบตามจริง เช่น คนหนึ่งทำ HTML/เนื้อหา/ภาษา อีกคนทำ CSS/JS/login และทั้งคู่ต้องอธิบายได้ทุกส่วน |

**เคล็ดลับ:** ก่อนพรีเซนต์ เปิด script.js อ่านคอมเมนต์ `// =====` หัวแต่ละส่วน จะเห็นภาพรวมทั้ง 11 ส่วน และลองแก้เล็ก ๆ เอง เช่น เปลี่ยน `--primary` ใน style.css หรือแก้ข้อความใน `lang/th.js` แล้วดูผล

---

## 11. แหล่งอ้างอิง

**งานวิจัยในเว็บไซต์**

- Goyal et al. 2014, JAMA Internal Medicine: https://pubmed.ncbi.nlm.nih.gov/24395196/
- Zaccaro et al. 2018, Frontiers in Human Neuroscience: https://pubmed.ncbi.nlm.nih.gov/30245619/
- WHO 2020, Doing What Matters in Times of Stress: https://www.who.int/publications/i/item/9789240003927
- Scott et al. 2021, Sleep Medicine Reviews: https://pubmed.ncbi.nlm.nih.gov/34607184/
- Singh et al. 2023, British Journal of Sports Medicine: https://bjsm.bmj.com/content/bjsports/early/2023/07/11/bjsports-2022-106195.full.pdf
- Aeon et al. 2021, PLOS ONE: https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7799745/
- Smyth et al. 2018, JMIR Mental Health: https://pmc.ncbi.nlm.nih.gov/articles/PMC6305886/
- Twohig-Bennett & Jones 2018, Environmental Research: https://pmc.ncbi.nlm.nih.gov/articles/PMC6562165/

**เอกสารเทคนิค (MDN)**

- localStorage: https://developer.mozilla.org/docs/Web/API/Window/localStorage
- crypto.subtle.digest: https://developer.mozilla.org/docs/Web/API/SubtleCrypto/digest
- position: sticky: https://developer.mozilla.org/docs/Web/CSS/position
- dir attribute (rtl): https://developer.mozilla.org/docs/Web/HTML/Global_attributes/dir
