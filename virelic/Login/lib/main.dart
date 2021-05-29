import 'package:flutter/material.dart';
import 'package:flutter/rendering.dart';

import 'icons/app_icons.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatefulWidget {
  @override
  MyAppState createState() => MyAppState();
}

class MyAppState extends State<MyApp> {
  bool _obscure = true;
  void change() {
    setState(() {
      _obscure = !_obscure;
      print(_obscure);
    });
  }

  @override
  Widget build(BuildContext context) {
    final shape = RoundedRectangleBorder(
      borderRadius: BorderRadius.circular(30),
    );

    return MaterialApp(
      home: Scaffold(
        body: Container(
          constraints: BoxConstraints.expand(),
          decoration: BoxDecoration(
            gradient: LinearGradient(
              colors: [Color(0xFFA703BD), Color(0xFFAF0864)],
              begin: Alignment.topLeft,
            ),
          ),
          child: Stack(
            children: [
              Positioned(
                left: -80,
                top: -100,
                child: Container(
                  width: 250,
                  height: 920,
                  decoration: BoxDecoration(
                    borderRadius: BorderRadius.circular(150),
                    border: Border.all(
                      color: Colors.white.withOpacity(0.12),
                      width: 50,
                    ),
                  ),
                ),
              ),
              Positioned(
                right: -80,
                bottom: -100,
                child: Container(
                  width: 250,
                  height: 920,
                  decoration: BoxDecoration(
                    borderRadius: BorderRadius.circular(150),
                    border: Border.all(
                      color: Colors.white.withOpacity(0.12),
                      width: 50,
                    ),
                  ),
                ),
              ),
              Column(
                mainAxisAlignment: MainAxisAlignment.center,
                children: <Widget>[
                  Image.asset(
                    'HueInsightLogo2.png',
                    width: 200,
                    height: 200,
                  ),
                  Padding(
                    padding: const EdgeInsets.fromLTRB(35, 0, 35, 20),
                    child: TextField(
                      style: TextStyle(fontSize: 18),
                      cursorColor: Colors.black,
                      cursorWidth: 3,
                      decoration: InputDecoration(
                        hintText: "Địa chị Email",
                        hintStyle:
                            TextStyle(color: Color(0xff888888), fontSize: 15),
                        filled: true,
                        fillColor: Colors.white,
                        contentPadding: const EdgeInsets.all(30),
                        focusedBorder: OutlineInputBorder(
                          borderSide: BorderSide(color: Colors.white),
                          borderRadius: BorderRadius.circular(30),
                        ),
                        enabledBorder: UnderlineInputBorder(
                          borderSide: BorderSide(color: Colors.white),
                          borderRadius: BorderRadius.circular(30),
                        ),
                      ),
                    ),
                  ),
                  Padding(
                    padding: const EdgeInsets.fromLTRB(35, 0, 35, 0),
                    child: TextField(
                      style: TextStyle(fontSize: 18),
                      cursorColor: Colors.black,
                      cursorWidth: 3,
                      decoration: InputDecoration(
                        hintText: "Mật khẩu",
                        hintStyle:
                            TextStyle(color: Color(0xff888888), fontSize: 15),
                        suffixIcon: new IconButton(
                          icon: Icon(
                            (_obscure
                                ? Icons.visibility_off
                                : Icons.visibility),
                            color: Color(0xff888888),
                          ),
                          tooltip: 'Increase volume by 10',
                          onPressed: change,
                        ),
                        filled: true,
                        fillColor: Colors.white,
                        contentPadding: const EdgeInsets.all(30),
                        focusedBorder: OutlineInputBorder(
                          borderSide: BorderSide(color: Colors.white),
                          borderRadius: BorderRadius.circular(30),
                        ),
                        enabledBorder: UnderlineInputBorder(
                          borderSide: BorderSide(color: Colors.white),
                          borderRadius: BorderRadius.circular(30),
                        ),
                      ),
                      obscureText: _obscure,
                    ),
                  ),
                  Padding(
                    padding: const EdgeInsets.fromLTRB(50, 25, 50, 0),
                    child: Align(
                      alignment: Alignment.centerRight,
                      child: Text(
                        "Quên mật khẩu?",
                        style: TextStyle(
                            color: Colors.white.withOpacity(0.6),
                            fontWeight: FontWeight.bold),
                      ),
                    ),
                  ),
                  Padding(
                    padding: const EdgeInsets.all(35),
                    child: ElevatedButton(
                      onPressed: () {},
                      child: Text(
                        "ĐĂNG NHẬP",
                        style: TextStyle(fontWeight: FontWeight.bold),
                      ),
                      style: ElevatedButton.styleFrom(
                        primary: Colors.white,
                        onPrimary: Color(0xFFAF0864),
                        padding:
                            EdgeInsets.symmetric(horizontal: 50, vertical: 20),
                        shape: shape,
                      ),
                    ),
                  ),
                  Padding(
                    padding: const EdgeInsets.fromLTRB(45, 5, 45, 35),
                    child: Row(
                      mainAxisAlignment: MainAxisAlignment.spaceBetween,
                      children: [
                        Container(
                          height: 1,
                          width: 90,
                          color: Colors.white.withOpacity(0.6),
                        ),
                        Text(
                          "hoặc kết nối với",
                          style: TextStyle(
                              color: Colors.white.withOpacity(0.6),
                              fontWeight: FontWeight.bold),
                        ),
                        Container(
                          height: 1,
                          width: 90,
                          color: Colors.white.withOpacity(0.6),
                        ),
                      ],
                    ),
                  ),
                  Padding(
                    padding: const EdgeInsets.fromLTRB(90, 0, 90, 0),
                    child: Row(
                        mainAxisAlignment: MainAxisAlignment.spaceBetween,
                        children: <Widget>[
                          Icon(
                            AppIcons.google,
                            size: 50,
                            color: Colors.white.withOpacity(0.6),
                          ),
                          Icon(
                            AppIcons.facebook,
                            size: 50,
                            color: Colors.white.withOpacity(0.6),
                          ),
                          Icon(
                            AppIcons.apple,
                            size: 50,
                            color: Colors.white.withOpacity(0.6),
                          ),
                        ]),
                  ),
                  Padding(
                    padding: const EdgeInsets.fromLTRB(0, 50, 0, 0),
                    child: Row(
                      mainAxisAlignment: MainAxisAlignment.center,
                      children: [
                        Text(
                          "Không có tài khoản Virelic?",
                          style: TextStyle(
                              color: Colors.white.withOpacity(0.6),
                              fontWeight: FontWeight.bold),
                        ),
                        Text(
                          " Đăng ký",
                          style: TextStyle(
                              color: Colors.white, fontWeight: FontWeight.bold),
                        )
                      ],
                    ),
                  ),
                ],
              ),
            ],
          ),
        ),
      ),
    );
  }
}
