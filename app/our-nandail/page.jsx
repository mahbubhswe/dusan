import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Image from "next/image";

export default function Page() {
  return (
    <Box
      sx={{
        marginTop: "100px",
        border: "1px solid white",
        borderRadius: "12px",
        padding: "25px",
        margin: "25px",
        boxShadow: "0 -4px 17px rgba(78,75,102,.15)",
        padding: { xs: "3%", sm: "5%", md: "7%" },
        margin: { xs: "3%", sm: "5%", md: "7%" },
      }}
    >
      <div style={{ textAlign: "center" }}>
        <Image src={"/map.png"} width={300} height={300} quality={100} />
      </div>
      <h2
        style={{
          color: "#CC2D3C",
          textShadow: "5px 5px 25px #CC2D3C",
        }}
      >
        নান্দাইল উপজেলার পরিচিতি
      </h2>
      <Divider />
      <Typography>
        নান্দাইল উপজেলা বাংলাদেশের ময়মনসিংহ জেলার একটি প্রশাসনিক এলাকা।
        ময়মনসিংহ শহর থেকে প্রায় ৪৬ কিলোমিটার দূরে অবস্থিত।
      </Typography>
      <h4
        style={{
          color: "#CC2D3C",
          textShadow: "5px 5px 25px #CC2D3C",
        }}
      >
        নামকরণ
      </h4>
      <Typography>
        এক সময়ে নন্দদুলাল নামের এক জমিদার ছিলেন। জমিদারি সীমানা তিনি নির্ধারণ
        করেছিলেন আইলের মাধ্যমে। মোগল আমলে এ এলাকার জনগণের নিকট থেকে জমির খাজনা
        আদায় করা খুবই দুরূহ ছিল। নন্দলাল প্রজাদের সঙ্গে ভাল সম্পর্ক তৈরি করে
        খাজনা আদায়ে সাফল্য লাভ করেন। তখন থেকেই এ এলাকার নাম তার নামানুসারে
        নান্দাইল রাখা হয়। নন্দ দুলালের নন্দ। এর সঙ্গে আইল অপভ্রংশ যুক্ত হয়ে
        নান্দাইল নামকরণ হয়।
      </Typography>
      <h4
        style={{
          color: "#CC2D3C",
          textShadow: "5px 5px 25px #CC2D3C",
        }}
      >
        মুক্তিযুদ্ধে অবদান
      </h4>
      <Typography>
        ১৯৭১ সালে মুক্তিযুদ্ধ শুরু হলে মুক্তিযোদ্ধা ও মুক্তিযুদ্ধ বিরোধী উভই
        পক্ষই সক্রিয় হয়ে উঠতে শুরু করে।এপ্রিলের দ্বিতীয় সপ্তাহেই পাকিস্তানি
        বাহিনীকে আটকানোর জন্য মুশুল্লী উচ্চ বিদ্যালয়ে গোপনে মেজর খালেদ মোশাররফ
        ও এটিএম হায়দারের নেতৃত্বে স্থানীয় মুক্তিযোদ্ধা ও সংগঠকদের একটি বৈঠক
        অনুষ্ঠিত হয়। বৈঠকের কয়েকদিনের মধ্যে পরিকল্পনা মোতাবেক ডিনামাইট দিয়ে
        মুশুল্লী রেলওয়ে স্টেশনের দক্ষিণে অবস্থিত শুভখিলা রেলব্রিজ ধ্বসিয়ে
        দেওয়া হয়। মেজর খালেদ এ অপারেশনে নেতৃত্ব দেন। ফলে কিশোরগঞ্জ থেকে রেলপথে
        ভারী অস্ত্রসহ পাকিস্তানি সেনাবাহিনীর আসার পথ আপাতদৃষ্টিতে বন্ধ হয়ে
        যায়। কিন্তু কয়েকদিন পরেই কিশোরগঞ্জ থেকে পাকিস্তানি বাহিনী শুভখিলা
        রেলব্রিজ পর্যন্ত আসে এবং স্থানীয়দের নদী পারাপারের নৌকায় হালকা অস্ত্রসহ
        নান্দাইলে প্রবেশ করে। অন্যদিকে সড়কপথে সশস্ত্র পাকিস্তানি বাহিনীর আগমন
        ঠেকানোর জন্য ১৮ এপ্রিল নান্দাইল শহরের প্রবেশমুখে কিশোরগঞ্জ সড়কের
        অংশবিশেষ কেটে ট্রেঞ্চ তৈরি করা হয়। কিন্তু স্থানীয় দালালদের সহায়তায়
        আগেই খবর পেয়ে পাকবাহিনী সতর্ক হয়ে যায় এবং এ ঘটনায় স্থানীয় আওয়ামী
        লীগ সভাপতি শাহনেওয়াজ ভূঁইয়াসহ সাত জনের বিরুদ্ধে নান্দাইল থানায় মামলা
        করা হয়। ২১ এপ্রিল মেজর আশফাকের নেতৃত্বে পাকবাহিনী নান্দাইলে ঘাঁটি
        স্থাপন করে। এই দিন রাজগাঁতী, শুভখিলা ও কালীগঞ্জ এলাকায় ১৮ জন
        গ্রামবাসীকে হত্যা করা হয় ও কয়েকশ বাড়িঘর পুড়িয়ে দেয়া হয়। পাকিস্তান
        সেনাবাহিনী নান্দাইল শহরের তিন-চার কিলোমিটার পূর্বে বারুইগ্রাম মাদ্রাসায়
        ক্যাম্প স্থাপন করে। স্থানীয় সংখ্যালঘু সম্প্রদায় নান্দাইল শহরের
        পার্শ্ববর্তী আমুদাবাদ গ্রামে আশ্রয় নেয় এবং স্থানীয় দালালদের সাথে গোপন
        সমঝোতার মাধ্যমে নিয়ন্ত্রিত জীবনযাপন করতে বাধ্য হয়।
      </Typography>
      <h4
        style={{
          color: "#CC2D3C",
          textShadow: "5px 5px 25px #CC2D3C",
        }}
      >
        নান্দাইলের মুক্তি
      </h4>
      <Typography>
        ডিসেম্বর মাসের প্রথম থেকে রণাঙ্গনে পাকবাহিনীর পরাজয়ে মনোবল কমিয়ে দেয়।
        এ সুযোগ কাজে লাগিয়ে মুক্তিযোদ্ধারা নতুন আক্রমণের পরিকল্পনা করে। ১০
        ডিসেম্বর রাতে নান্দাইল শহরকে তিনদিক থেকে ঘিরে রাখা নরসুন্দা নদীকে কাজে
        লাগিয়ে কমান্ডার ফারুকের নেতৃত্বে মুজিব বাহিনী থানা ঘেরাও করে পাকিস্তানি
        বাহিনীকে আত্মসমর্পণে বাধ্য করে। রাত দুইটার দিকে নান্দাইলে প্রথম
        বিজয়সূচক স্বাধীন বাংলাদেশের পতাকা উত্তোলন করা হয়। তাই ১১ ডিসেম্বরকেই
        নান্দাইল মুক্ত দিবস হিসেবে বিবেচনা করা হয়।
      </Typography>
      <h4
        style={{
          color: "#CC2D3C",
          textShadow: "5px 5px 25px #CC2D3C",
        }}
      >
        প্রশাসনিক ইতিহাস
      </h4>
      <Typography>
        ১৯১২ সালের ২ জানুয়ারি প্রশাসনিক ইউনিট হিসেবে নান্দাইল থানার গোড়াপত্তন
        ঘটে। ১৯১২ সালের ১৮ জানুয়ারি নান্দাইল থানা সরকারি গেজেটভুক্ত হয়। ১৯৮২
        সালের ১৫ ডিসেম্বর নান্দাইল উপজেলা সৃষ্টি হয়।
      </Typography>{" "}
      <h4
        style={{
          color: "#CC2D3C",
          textShadow: "5px 5px 25px #CC2D3C",
        }}
      >
        প্রশাসনিক এলাকা
      </h4>
      <Typography>
        নান্দাইল উপজেলায় বর্তমানে ১টি পৌরসভা ও ১৩টি ইউনিয়ন রয়েছে। সম্পূর্ণ
        উপজেলার প্রশাসনিক কার্যক্রম নান্দাইল থানার আওতাধীন।
      </Typography>
      <h4
        style={{
          color: "#CC2D3C",
          textShadow: "5px 5px 25px #CC2D3C",
        }}
      >
        জনসংখ্যার উপাত্ত
      </h4>
      <Typography>
        ২০১১ বাংলাদেশ আদমশুমারি অনুসারে নান্দাইলের জনসংখ্যা প্রায় ৪,০২,৭২৭ জন।
        এর মধ্যে পুরুষ ৪৯.২১% এবং নারী ৫০.৭৯%। মোট জনসংখ্যার ৯৮.০৪% মুসলমান,
        ১.৮৭% হিন্দু এবং ০.০৯% অন্যান্য ধর্মাবলম্বী। সাত বছর বয়সের ঊর্ধ্বে
        শিক্ষার হার ৪০.৩৮%। বাৎসরিক জনসংখ্যা বৃদ্ধির হার ১.২১%। ১৯৯১ সালের
        আদমশুমারি অনুযায়ী নান্দাইলের জনসংখ্যা ছিল ৩,২৮,৮৪৭ জন। মোট জনসংখ্যার
        ৫০.৮২% ছিল পুরুষ ও ৪৯.১৮% ছিল নারী। প্রায় ১,৫৫,৯৩০ জনের বয়স আঠারো বছর
        বা তার বেশি। নান্দাইল উপজেলায় শিক্ষার হার ছিল ২২.৩% (৭+ বছর), যেখানে
        জাতীয় শিক্ষার হার ছিল ৩২.৪%।
      </Typography>
    </Box>
  );
}
