"use client";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import React from "react";
import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import FileBase64 from "react-file-base64";
import Swal from "sweetalert2";
import { db } from "../utils/firebase";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import Image from "next/image";

export default function Page() {
  const [open, setOpen] = useState(false);
  const [memberInfo, setMemberInfo] = useState({
    name: String,
    photo: "",
    email: String,
    phone: String,
    password: String,
    fatherName: String,
    workingPlace: String,
    school: String,
    dep: String,
    holl: String,
    fbIdLink: String,
    session: String,
    presentAddress: String,
    village: String,
    occupation: String,
    designation: String,
    bloodGroup: String,
    union: String,
    collage: String,
    isApproved: false,
    createdAt: Timestamp.now(),
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    Swal.fire({
      title: "Are you sure?",
      text: "You want to submit a request for membership account",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
      reverseButtons: true,
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          setOpen(true);
          await addDoc(collection(db, "members"), {
            ...memberInfo,
          });
          setOpen(false);
          Swal.fire(
            "Success",
            "You have submitted a request successfully!",
            "success"
          ).then((result) => {
            if (result.isConfirmed) {
              e.target.reset();
            }
          });
        } catch (error) {
          console.log(error.message);
        }
      }
    });
  };
  const bloodGroupList = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O-"];

  const unionList = [
    "বেতাগৈর ইউনিয়ন",
    "মোয়াজ্জেমপুর ইউনিয়ন",
    "নান্দাইল ইউনিয়ন",
    "চণ্ডীপাশা ইউনিয়ন",
    "গাংগাইল ইউনিয়ন",
    "রাজগাঁতী ইউনিয়ন",
    "মুশুল্লী ইউনিয়ন",
    "সিংরইল ইউনিয়ন",
    "আচারগাঁও ইউনিয়ন",
    "শেরপুর ইউনিয়ন",
    "খারুয়া ইউনিয়ন",
    "জাহাঙ্গীরপুর ইউনিয়ন",
  ];
  return (
    <React.Fragment>
      <Container maxWidth="md" sx={{ my: "25px" }}>
        <Stack
          direction={"column"}
          component={"form"}
          spacing={2}
          onSubmit={handleSubmit}
          sx={{
            border: "1px solid #ccc",
            borderRadius: "25px",
            padding: "25px",
          }}
        >
          <Typography
            align="center"
            sx={{
              fontWeight: "bold",
              fontSize: "25px",
              py: "10px",
              textShadow: "2px 2px 3px teal",
            }}
          >
            সদস্য একাউন্ট আবেদন ফরম
          </Typography>
          {memberInfo.photo ? (
            <Image
              src={memberInfo.photo}
              height={200}
              width={200}
              style={{ borderRadius: "50%" }}
              quality={100}
            />
          ) : (
            <p
              style={{
                height: "200px",
                width: "200px",
                border: "1px dashed grey",
                borderRadius: "7px",
                display: "grid",
                placeContent: "center",
                color: "grey",
              }}
            >
              ফটো নির্বাচন করুন
            </p>
          )}
          <FileBase64
            onDone={(data) =>
              setMemberInfo({ ...memberInfo, photo: data.base64 })
            }
          />
          <Stack direction={{ xs: "column", sm: "row", md: "row" }} spacing={1}>
            <TextField
              size="small"
              fullWidth
              label="আপনার নাম"
              type="text"
              required
              placeholder="আপনার নাম লিখুন"
              variant="outlined"
              onChange={(e) =>
                setMemberInfo({ ...memberInfo, name: e.target.value })
              }
            />
            <Autocomplete
              size="small"
              fullWidth
              required
              options={bloodGroupList}
              renderInput={(params) => (
                <TextField {...params} label="রক্তের গ্রুপ নির্বাচন করুন" />
              )}
              onChange={(e) =>
                setMemberInfo({ ...memberInfo, bloodGroup: e.target.value })
              }
            />
          </Stack>
          <Stack direction={{ xs: "column", sm: "row", md: "row" }} spacing={1}>
            <TextField
              size="small"
              fullWidth
              label="পিতার নাম"
              type="text"
              required
              placeholder="পিতার নাম লিখুন"
              variant="outlined"
              onChange={(e) =>
                setMemberInfo({ ...memberInfo, fatherName: e.target.value })
              }
            />
            <TextField
              size="small"
              fullWidth
              label="নিজ পেশা"
              type="text"
              required
              placeholder="পেশা লিখুন"
              variant="outlined"
              onChange={(e) =>
                setMemberInfo({ ...memberInfo, occupation: e.target.value })
              }
            />
          </Stack>
          <Stack direction={{ xs: "column", sm: "row", md: "row" }} spacing={1}>
            <TextField
              size="small"
              fullWidth
              label="পদবী"
              type="text"
              required
              placeholder="পদবী লিখুন"
              variant="outlined"
              onChange={(e) =>
                setMemberInfo({ ...memberInfo, designation: e.target.value })
              }
            />
            <TextField
              size="small"
              fullWidth
              label="কর্মস্থল"
              type="text"
              required
              placeholder="কর্মস্থলের ঠিকানা লিখুন"
              variant="outlined"
              onChange={(e) =>
                setMemberInfo({ ...memberInfo, workingPlace: e.target.value })
              }
            />
          </Stack>
          <Stack direction={{ xs: "column", sm: "row", md: "row" }} spacing={1}>
            <TextField
              size="small"
              fullWidth
              label="গ্রাম"
              type="text"
              required
              placeholder="গ্রামের নাম লিখুন"
              variant="outlined"
              onChange={(e) =>
                setMemberInfo({ ...memberInfo, village: e.target.value })
              }
            />
            <Autocomplete
              size="small"
              fullWidth
              required
              options={unionList}
              renderInput={(params) => (
                <TextField {...params} label="ইউনিয়ন নির্বাচন করুন" />
              )}
              onChange={(e) =>
                setMemberInfo({ ...memberInfo, union: e.target.value })
              }
            />
          </Stack>
          <Stack direction={{ xs: "column", sm: "row", md: "row" }} spacing={1}>
            <TextField
              size="small"
              fullWidth
              label="স্কুল"
              type="text"
              required
              placeholder="স্কুলের নাম লিখুন"
              variant="outlined"
              onChange={(e) =>
                setMemberInfo({ ...memberInfo, school: e.target.value })
              }
            />
            <TextField
              size="small"
              fullWidth
              label="কলেজ"
              type="text"
              required
              placeholder="কলেজের নাম লিখুন"
              variant="outlined"
              onChange={(e) =>
                setMemberInfo({ ...memberInfo, collage: e.target.value })
              }
            />
          </Stack>
          <Stack direction={{ xs: "column", sm: "row", md: "row" }} spacing={1}>
            <TextField
              size="small"
              fullWidth
              label="ডিপার্টমেন্ট"
              type="text"
              required
              placeholder="ডিপার্টমেন্টের নাম লিখুন"
              variant="outlined"
              onChange={(e) =>
                setMemberInfo({ ...memberInfo, dep: e.target.value })
              }
            />
            <TextField
              size="small"
              fullWidth
              label="সেশন"
              type="text"
              required
              placeholder="সেশনের নাম লিখুন"
              variant="outlined"
              onChange={(e) =>
                setMemberInfo({ ...memberInfo, session: e.target.value })
              }
            />
          </Stack>
          <Stack direction={{ xs: "column", sm: "row", md: "row" }} spacing={1}>
            <TextField
              size="small"
              fullWidth
              label="হল"
              type="text"
              required
              placeholder="হলের নাম লিখুন"
              variant="outlined"
              onChange={(e) =>
                setMemberInfo({ ...memberInfo, holl: e.target.value })
              }
            />
            <TextField
              size="small"
              fullWidth
              label="বর্তমান ঠিকানা"
              type="text"
              required
              placeholder="আপনার বর্তমান ঠিকানা লিখুন"
              variant="outlined"
              onChange={(e) =>
                setMemberInfo({ ...memberInfo, presentAddress: e.target.value })
              }
            />
          </Stack>
          <Stack direction={{ xs: "column", sm: "row", md: "row" }} spacing={1}>
            <TextField
              size="small"
              fullWidth
              label="মোবাইল"
              type="text"
              required
              placeholder="মোবাইল নম্বর লিখুন"
              variant="outlined"
              onChange={(e) =>
                setMemberInfo({ ...memberInfo, phone: e.target.value })
              }
            />
            <TextField
              size="small"
              fullWidth
              label="ইমেইল"
              type="text"
              required
              placeholder="ইমেইল এড্রেস লিখুন"
              variant="outlined"
              onChange={(e) =>
                setMemberInfo({ ...memberInfo, email: e.target.value })
              }
            />
          </Stack>
          <Stack direction={{ xs: "column", sm: "row", md: "row" }} spacing={1}>
            <TextField
              size="small"
              fullWidth
              label="ফেসবুক আইডি"
              type="text"
              required
              placeholder="ফেসবুক আইডির লিঙ্ক দিন"
              variant="outlined"
              onChange={(e) =>
                setMemberInfo({ ...memberInfo, fbIdLink: e.target.value })
              }
            />
            <TextField
              size="small"
              fullWidth
              label="পাসওয়ার্ড"
              type="password"
              required
              placeholder="সদস্য একাউন্ট পাসওয়ার্ড লিখুন"
              variant="outlined"
              onChange={(e) =>
                setMemberInfo({ ...memberInfo, password: e.target.value })
              }
            />
          </Stack>
          <Button fullWidth variant="contained" type="submit">
            সাবমিট করুন
          </Button>
        </Stack>
      </Container>
      <Backdrop open={open}>
        <CircularProgress sx={{ color: "green" }} />
      </Backdrop>
    </React.Fragment>
  );
}
