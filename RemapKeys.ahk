#Requires AutoHotkey v2.0
; ^{Ctrl} +{Shift} !{Alt} #{LWin}

; LAlt::LCtrl
; LCtrl::LAlt
; LWin::LAlt

; <!q::Send "{Alt down}{F4}{Alt up}"
; <!w::Send "{Ctrl down}w{Ctrl up}"

;数字部分，通常用于chrome
<!1::^1
<!2::^2
<!3::^3
<!4::^4
<!5::^5
<!6::^6
<!7::^7
<!8::^8
<!9::^9
<!0::^0
<!-::^-
<!=::^=

<!F1::^F1
<!F2::^F2
<!F3::^F3
<!F4::^F4
<!F5::^F5
<!F6::^F6
<!F7::^F7
<!F8::^F8
<!F9::^F9
<!F10::^F10
<!F11::^F11
<!F12::^F12

<!q::Send "{Alt down}{F4}{Alt up}"
<!w::Send "{Ctrl down}w{Ctrl up}"
<!e::^e
<!r::^r
<!t::^t
<!u::^u
<!i::^i
<!o::^o
<!p::^p

<!a::^a
<!s::^s
<!d::^d
<!f::^f
<!g::^g
<!h::^h
<!j::^j
<!k::^k
<!l::^l

<!z::^z
<!x::^x
<!c::^c
<!v::^v
<!b::^b
<!n::^n
<!m::^m
<!/::^/

<!Space::^Space
<!Enter::^Enter
<!Esc::^Esc
<!Backspace::^Backspace

<!Delete::^Delete
<!Home::^Home
<!End::^End
<!PgUp::^PgUp
<!PgDn::^PgDn
<!Up::^Up
<!Down::^Down
<!Left::^Left
<!Right::^Right

#HotIf GetKeyState("LAlt")
LWin & Left::
Left & LWin::Send "{Ctrl down}{LWin down}{Left}{Ctrl up}{LWin up}"
LWin & Right::
Right & LWin::Send "{Ctrl down}{LWin down}{Right}{Ctrl up}{LWin up}"
LWin & Up::
Up & LWin::Return
LWin & Down::
Down & LWin::Return
LShift & Left::Send "{Ctrl down}{Shift down}{Left}{Ctrl up}{Shift up}"
LShift & Right::Send "{Ctrl down}{Shift down}{Right}{Ctrl up}{Shift up}"
LShift & Up::Send "{Ctrl down}{Shift down}{Up}{Ctrl up}{Shift up}"
LShift & Down::Send "{Ctrl down}{Shift down}{Down}{Ctrl up}{Shift up}"
LShift & Home::Send "{Ctrl down}{Shift down}{Home}{Ctrl up}{Shift up}"
LShift & End::Send "{Ctrl down}{Shift down}{End}{Ctrl up}{Shift up}"
#HotIf ;End
